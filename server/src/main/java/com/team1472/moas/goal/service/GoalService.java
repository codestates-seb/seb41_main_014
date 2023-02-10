package com.team1472.moas.goal.service;

import com.team1472.moas.exception.BusinessLogicException;
import com.team1472.moas.exception.ExceptionCode;
import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;
import com.team1472.moas.goal.repository.GoalRepository;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class GoalService{
    private final MemberService memberService;
    private final GoalRepository goalRepository;

    //목표 생성
    public Goal createGoal(Goal goal, long memberId) {
        //회원 정보 추가
        Member member = memberService.findMember(memberId);
        goal.addMember(member);

        //이미지 url 정보 존재 시 저장
        Optional.ofNullable(goal.getUrl()).ifPresent(url -> goal.setUrl(url));

        //납입 기간 자동 계산하여 저장
        goal.savePeriod();
        //진척도 자동 계산하여 저장
        goal.saveProgress();
        //완료 상태 자동 계산하여 저장
        goal.saveStatus();

        return goalRepository.save(goal);
    }

    //목표 수정
    public Goal updateGoal(Goal goal, long goalId, long memberId) {
        Goal findGoal = findVerifiedGoalByMemberId(goalId, memberId);

        Optional.ofNullable(goal.getGoalName()).ifPresent(goalName -> findGoal.setGoalName(goalName));
        Optional.ofNullable(goal.getPrice()).ifPresent(price -> findGoal.setPrice(price));
        Optional.ofNullable(goal.getMonthlyPayment()).ifPresent(monthlyPayment -> findGoal.setMonthlyPayment(monthlyPayment));
        Optional.ofNullable(goal.getUrl()).ifPresent(url -> findGoal.setUrl(url));

        findGoal.savePeriod();
        findGoal.saveProgress();
        findGoal.saveStatus();

        return goalRepository.save(findGoal);
    }

    //목표 상세 조회
    public Goal findGoal(long goalId, long memberId) {
        return findVerifiedGoalByMemberId(goalId, memberId);
    }

    //목표 전체 조회 (List)
    public List<GoalRes> findGoals(long memberId) {
        List<GoalRes> goals = goalRepository.findGoalsByMemberId(memberId);
        return goals;
    }

    //목표 삭제
    public void deleteGoal(long goalId, long memberId) {
        Goal findGoal = findVerifiedGoalByMemberId(goalId, memberId);
        goalRepository.delete(findGoal);
    }

    //goalId와 memberId로 특정 목표 찾기
    private Goal findVerifiedGoalByMemberId(long goalId, long memberId) {
        return goalRepository.findByIdAndMemberId(goalId, memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.GOAL_NOT_FOUND));
    }

    //goalId로 특정 목표 찾기
    private Goal findVerifiedGoal(long goalId) {
        return goalRepository.findById(goalId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.GOAL_NOT_FOUND));
    }
}

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
        savePeriod(goal);

        return goalRepository.save(goal);
    }

    //목표 수정
    public Goal updateGoal(Goal goal, long goalId, long memberId) {
        Goal findGoal = findVerifiedGoalByMemberId(goalId, memberId);

        Optional.ofNullable(goal.getGoalName()).ifPresent(goalName -> findGoal.setGoalName(goalName));
        Optional.ofNullable(goal.getPrice()).ifPresent(price -> findGoal.setPrice(price));
        Optional.ofNullable(goal.getMonthlyPayment()).ifPresent(monthlyPayment -> findGoal.setMonthlyPayment(monthlyPayment));
        Optional.ofNullable(goal.getUrl()).ifPresent(url -> findGoal.setUrl(url));

        savePeriod(goal);
        saveProgress(goalId);
        saveStatus(goalId);

        return goalRepository.save(findGoal);
    }

    //목표 상세 조회
    public Goal findGoal(long goalId, long memberId) {
        saveProgress(goalId);
        saveStatus(goalId);
        return findVerifiedGoalByMemberId(goalId, memberId);
    }

    //목표 전체 조회 (List)
    public List<GoalRes> findGoals(long memberId) {
        List<GoalRes> goals = goalRepository.findGoalsByMemberId(memberId);
        for (GoalRes goal : goals) {
            saveProgress(goal.getId());
            saveStatus(goal.getId());
        }
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

    //납입기간 설정
    private Goal savePeriod(Goal goal) {
        //납입 기간(단위: 월) = {(목표금액)/월 납입금}
        int period = (int) Math.ceil((double) goal.getPrice() / goal.getMonthlyPayment());
        goal.setPeriod(period);
        return goal;
    }

    //status 설정
    private Goal saveStatus(long goalId) {
        Goal findGoal = findVerifiedGoal(goalId);
        if (findGoal.getProgress() == 100) {
            findGoal.setStatus(Goal.GoalStatus.COMPLETED);
        } else {
            findGoal.setStatus(Goal.GoalStatus.PROGRESS);
        }
        return findGoal;
    }

    //진척도(%) 설정
    private Goal saveProgress(long goalId) {
        Goal findGoal = findVerifiedGoal(goalId);

        LocalDate createdDate = findGoal.getCreatedAt().toLocalDate(); //목표 생성 시간
        LocalDate localDate = LocalDate.now(); //현재 시간

        double month = (double) ChronoUnit.MONTHS.between(createdDate, localDate); //경과한 시간 (단위: 월)
        int goalPeriod = findGoal.getPeriod(); //설정된 납부 기간

        //목표 생성 시간이 현재 시간 이전일 때
        if (createdDate.isBefore(localDate)) {
            //납부기간이 남았을 때
            if (goalPeriod >= month) {
                double progress = month / goalPeriod * 100;
                int result = (int) Math.round(progress);
                findGoal.setProgress(result);
            }
            //납부기간이 지났을때 (계속 100%로 나타냄)
            else {
                findGoal.setProgress(100);
            }
        }
        return findGoal;
    }
}

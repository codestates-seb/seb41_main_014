package com.team1472.moas.goal.service;

import com.team1472.moas.exception.BusinessLogicException;
import com.team1472.moas.exception.ExceptionCode;
import com.team1472.moas.goal.entity.Goal;
import com.team1472.moas.goal.repository.GoalRepository;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class GoalService{
    private final MemberRepository memberRepository;
    private final GoalRepository goalRepository;

    //목표 생성
    public Goal createGoal(Goal goal, long memberId) {
        Member member = memberRepository.findById(memberId);
        goal.setMember(member);

        //납입 기간(단위: 월) = {(목표금액 - 원금)/월 납입금}
        int period = (int) Math.ceil((goal.getPrice() - goal.getPrinciple()) / goal.getMonthlyPayment());
        goal.setPeriod(period);

        return goalRepository.save(goal);
    }

    //목표 수정
    public Goal updateGoal(Goal goal, long goalId) {
        //Goal findGoal = findVerifiedGoal(goal.getId());
        Goal findGoal = findVerifiedGoal(goalId);

        //리팩토링 필요
        Optional.ofNullable(goal.getGoalName()).ifPresent(goalName -> findGoal.setGoalName(goalName));
        Optional.ofNullable(goal.getPrice()).ifPresent(price -> findGoal.setPrice(price));
        Optional.ofNullable(goal.getMonthlyPayment()).ifPresent(monthlyPayment -> findGoal.setMonthlyPayment(monthlyPayment));
        Optional.ofNullable(goal.getPaymentStart()).ifPresent(paymentStart -> findGoal.setPaymentStart(paymentStart));

        int period = (int) Math.ceil((goal.getPrice() - goal.getPrinciple()) / goal.getMonthlyPayment());
        goal.setPeriod(period);

        //상태 변경 어떻게?
        Optional.ofNullable(goal.getStatus()).ifPresent(status -> findGoal.setStatus(status));
        Optional.ofNullable(goal.getUrl()).ifPresent(url -> findGoal.setUrl(url));

        return goalRepository.save(findGoal);
    }

    //목표 상세 조회
    public Goal findGoal(long goalId) {
        return findVerifiedGoal(goalId);
    }

    //목표 전체 조회 (List)
    public List<Goal> findGoals() {
        return goalRepository.findAll();
    }

    //목표 삭제
    public void deleteGoal(long goalId) {
        Goal findGoal = findVerifiedGoal(goalId);
        goalRepository.delete(findGoal);
    }

    //id로 특정 목표가 존재하는지 찾아서 리턴
    //존재하지 않을 시 에러 메세지 띄움
    private Goal findVerifiedGoal(long goalId) {
        Optional<Goal> optionalGoal = goalRepository.findById(goalId);
        Goal findGoal = optionalGoal.orElseThrow(() -> new BusinessLogicException(ExceptionCode.GOAL_NOT_FOUND));
        return findGoal;
    }
}

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

import java.time.LocalDate;
import java.time.temporal.ChronoUnit;
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

        savePeriod(goal); //납입 기간 계산

        return goalRepository.save(goal);
    }

    //목표 수정
    public Goal updateGoal(Goal goal, long goalId) {
        Goal findGoal = findVerifiedGoal(goalId);

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
    public Goal findGoal(long goalId) {
        saveProgress(goalId);
        saveStatus(goalId);
        return findVerifiedGoal(goalId);
    }

    //목표 전체 조회 (List)
    public List<Goal> findGoals() {
        List<Goal> goals = goalRepository.findAll();
        for (Goal goal : goals) {
            saveProgress(goal.getId());
            saveStatus(goal.getId());
        }
        return goals;
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

    //납입기간 설정
    private Goal savePeriod(Goal goal) {
        //납입 기간(단위: 월) = {(목표금액 - 원금)/월 납입금}
        int period = (int) Math.ceil((goal.getPrice() - goal.getPrinciple()) / goal.getMonthlyPayment());
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

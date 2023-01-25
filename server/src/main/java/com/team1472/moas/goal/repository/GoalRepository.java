package com.team1472.moas.goal.repository;

import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface GoalRepository extends JpaRepository<Goal, Long> {
    Optional<Goal> findByIdAndMemberId(long Id, long memberId);
    List<GoalRes> findGoalsByMemberId(long memberId);
}

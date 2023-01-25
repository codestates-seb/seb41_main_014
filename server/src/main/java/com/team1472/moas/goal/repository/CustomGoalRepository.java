package com.team1472.moas.goal.repository;

import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;

import java.util.List;
import java.util.Optional;

public interface CustomGoalRepository {
    Optional<Goal> findByIdAndMemberId(long Id, long memberId);
    List<GoalRes> findGoalsByMemberId(long memberId);
}

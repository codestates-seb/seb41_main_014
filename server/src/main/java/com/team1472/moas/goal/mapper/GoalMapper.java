package com.team1472.moas.goal.mapper;

import com.team1472.moas.goal.dto.GoalPatchReq;
import com.team1472.moas.goal.dto.GoalPostReq;
import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GoalMapper {
    Goal goalPostReqToGoal(GoalPostReq goalPostReq);
    Goal goalPatchReqToGoal(GoalPatchReq goalPatchReq);
    GoalRes goalToGoalRes(Goal goal);
    List<GoalRes> goalsToGoalRes(List<Goal> goals);
}

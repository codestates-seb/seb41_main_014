package com.team1472.moas.goal.mapper;

import com.team1472.moas.goal.dto.GoalPatchRes;
import com.team1472.moas.goal.dto.GoalPostRes;
import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GoalMapper {
    Goal goalPostDtoToGoal(GoalPostRes goalPostRes);
    Goal goalPatchDtoToGoal(GoalPatchRes goalPatchRes);
    GoalRes goalToGoalResponseDto(Goal goal);
    List<GoalRes> goalsToGoalResponseDtos(List<Goal> goals);
}

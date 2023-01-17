package com.team1472.moas.goal.mapper;

import com.team1472.moas.goal.dto.GoalPatchReq;
import com.team1472.moas.goal.dto.GoalPostReq;
import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface GoalMapper {
    Goal goalPostReq(GoalPostReq goalPostReq);
    Goal goalPatchReq(GoalPatchReq goalPatchReq);
    GoalRes goalRes(Goal goal);
    List<GoalRes> goalsRes(List<Goal> goals);
}


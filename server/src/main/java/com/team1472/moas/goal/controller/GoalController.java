package com.team1472.moas.goal.controller;


import com.team1472.moas.goal.dto.GoalPatchReq;
import com.team1472.moas.goal.dto.GoalPostReq;
import com.team1472.moas.goal.entity.Goal;
import com.team1472.moas.goal.mapper.GoalMapper;
import com.team1472.moas.goal.service.GoalService;
import com.team1472.moas.response.MultiResponse;
import com.team1472.moas.response.SingleResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/api/goals")
@Validated
@Slf4j
@RequiredArgsConstructor
public class GoalController {
    private final GoalService goalService;
    private final GoalMapper mapper;

    //목표 등록
    @PostMapping("/{member-id}")
    public ResponseEntity postGoal(@PathVariable("member-id") @Positive long memberId,
                                   @Valid @RequestBody GoalPostReq goalPostReq) {
        Goal createdGoal = goalService.createGoal(mapper.goalPostReqToGoal(goalPostReq), memberId);

        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalRes(createdGoal)),
                HttpStatus.CREATED);
    }

    //목표 수정
    @PatchMapping("/{member-id}/{goal-id}")
    public ResponseEntity patchGoal(@PathVariable("member-id") @Positive long memberId,
                                    @PathVariable("goal-id") @Positive long goalId,
                                    @Valid @RequestBody GoalPatchReq goalPatchReq) {
        Goal goal = goalService.updateGoal(mapper.goalPatchReqToGoal(goalPatchReq),goalId);

        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalRes(goal)),
                HttpStatus.OK);
    }

    //목표 상세 조회
    @GetMapping("/{member-id}/{goal-id}")
    public ResponseEntity getGoal(@PathVariable("goal-id") @Positive long goalId) {
        Goal goal = goalService.findGoal(goalId);
        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalRes(goal)),
                HttpStatus.OK);
    }

    //목표 전체 조회(페이지네이션 적용 X)
    @GetMapping("/{member-id}")
    public ResponseEntity getQuestions() {
        List<Goal> goals = goalService.findGoals();
        return new ResponseEntity<>(
                new MultiResponse<>(mapper.goalsToGoalRes(goals)),
                HttpStatus.OK);
    }

    //목표 삭제
    @DeleteMapping("/{member-id}/{goal-id}")
    public ResponseEntity deleteGoal(@PathVariable("goal-id") @Positive long goalId) {
        goalService.deleteGoal(goalId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

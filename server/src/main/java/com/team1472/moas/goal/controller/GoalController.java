package com.team1472.moas.goal.controller;

import com.team1472.moas.goal.dto.GoalPatchRes;
import com.team1472.moas.goal.dto.GoalPostRes;
import com.team1472.moas.goal.entity.Goal;
import com.team1472.moas.goal.mapper.GoalMapper;
import com.team1472.moas.goal.repository.GoalRepository;
import com.team1472.moas.goal.service.GoalService;
import com.team1472.moas.member.service.MemberService;
import com.team1472.moas.response.MultiResponse;
import com.team1472.moas.response.SingleResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.coyote.Response;
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
                                   @Valid @RequestBody GoalPostRes goalPostRes) {
        Goal createdGoal = goalService.createGoal(mapper.goalPostDtoToGoal(goalPostRes), memberId);

        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalResponseDto(createdGoal)),
                HttpStatus.CREATED);
    }

    //목표 수정
    @PatchMapping("/{member-id}")
    public ResponseEntity patchGoal(@PathVariable("member-id") @Positive long memberId,
                                    @Valid @RequestBody GoalPatchRes goalPatchRes) {
        goalPatchRes.setMemberId(memberId);
        Goal goal = goalService.updateGoal(mapper.goalPatchDtoToGoal(goalPatchRes));

        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalResponseDto(goal)),
                HttpStatus.OK);
    }

    //목표 상세 조회
    @GetMapping("/{member-id}/{id}")
    public ResponseEntity getGoal(@PathVariable("id") @Positive long id) {
        Goal goal = goalService.findGoal(id);
        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalResponseDto(goal)),
                HttpStatus.OK);
    }

    //목표 전체 조회(페이지네이션 적용 X)
    @GetMapping("/{member-id}")
    public ResponseEntity getQuestions() {
        List<Goal> goals = goalService.findGoals();
        return new ResponseEntity<>(
                new MultiResponse<>(mapper.goalsToGoalResponseDtos(goals)),
                HttpStatus.OK);
    }

    //목표 삭제
    @DeleteMapping("/{member-id}/{id}")
    public ResponseEntity deleteGoal(@PathVariable("id") @Positive long id) {
        goalService.deleteGoal(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

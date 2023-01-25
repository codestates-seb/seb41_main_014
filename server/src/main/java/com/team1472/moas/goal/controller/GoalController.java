package com.team1472.moas.goal.controller;


import com.team1472.moas.goal.dto.GoalPatchReq;
import com.team1472.moas.goal.dto.GoalPostReq;
import com.team1472.moas.goal.dto.GoalRes;
import com.team1472.moas.goal.entity.Goal;
import com.team1472.moas.goal.mapper.GoalMapper;
import com.team1472.moas.goal.service.GoalService;
import com.team1472.moas.member.service.MemberService;
import com.team1472.moas.response.MultiResponse;
import com.team1472.moas.response.SingleResponse;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.security.Principal;
import java.util.List;

@RestController
@RequestMapping("/api/goals")
@Validated
@Slf4j
@RequiredArgsConstructor
@Tag(name = "Goals", description = "목표 API")
public class GoalController {
    private final GoalService goalService;
    private final MemberService memberService;
    private final GoalMapper mapper;

    /**
     * 목표 등록
     *
     * @param principal
     * @param goalPostReq
     * @return ResponseEntity
     */
    @Operation(summary = "목표 등록")
    @PostMapping()
    public ResponseEntity postGoal(Principal principal,
                                   @Valid @RequestBody GoalPostReq goalPostReq) {
        long memberId;
        try {
            memberId = memberService.findMemberId(principal.getName());
        } catch (NullPointerException e) {
            return new ResponseEntity<>("회원정보 없음", HttpStatus.OK);
        }

        Goal createdGoal = goalService.createGoal(mapper.goalPostReqToGoal(goalPostReq), memberId);

        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalRes(createdGoal)),
                HttpStatus.CREATED);
    }

    /**
     * 목표 수정
     *
     * @param principal
     * @param goalId
     * @return ResponseEntity
     */
    @Operation(summary = "목표 수정")
    @PatchMapping("/{goal-id}")
    public ResponseEntity patchGoal(Principal principal,
                                    @PathVariable("goal-id") @Positive long goalId,
                                    @Valid @RequestBody GoalPatchReq goalPatchReq) {
        long memberId;
        try {
            memberId = memberService.findMemberId(principal.getName());
        } catch (NullPointerException e) {
            return new ResponseEntity<>("회원정보 없음", HttpStatus.OK);
        }

        Goal goal = goalService.updateGoal(mapper.goalPatchReqToGoal(goalPatchReq),goalId, memberId);

        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalRes(goal)),
                HttpStatus.OK);
    }

    /**
     * 목표 상세 조회
     *
     * @param principal
     * @param goalId
     * @return ResponseEntity
     */
    @Operation(summary = "목표 상세 조회")
    @GetMapping("/{goal-id}")
    public ResponseEntity getGoal(Principal principal,
                                  @PathVariable("goal-id") @Positive long goalId) {
        long memberId;
        try {
            memberId = memberService.findMemberId(principal.getName());
        } catch (NullPointerException e) {
            return new ResponseEntity<>("회원정보 없음", HttpStatus.OK);
        }

        Goal goal = goalService.findGoal(goalId, memberId);
        return new ResponseEntity<>(
                new SingleResponse<>(mapper.goalToGoalRes(goal)),
                HttpStatus.OK);
    }

    /**
     * 목표 전체 조회(페이지네이션 적용 X)
     *
     * @param principal
     * @return ResponseEntity
     */
    @Operation(summary = "목표 전체 조회")
    @GetMapping()
    public ResponseEntity getQuestions(Principal principal) {
        long memberId;
        try {
            memberId = memberService.findMemberId(principal.getName());
        } catch (NullPointerException e) {
            return new ResponseEntity<>("회원정보 없음", HttpStatus.OK);
        }

        List<GoalRes> goals = goalService.findGoals(memberId);
        return new ResponseEntity<>(
                new MultiResponse<>(goals),
                HttpStatus.OK);
    }

    /**
     * 목표 삭제
     *
     * @param principal
     * @param goalId
     * @return ResponseEntity
     */
    @Operation(summary = "목표 삭제")
    @DeleteMapping("/{goal-id}")
    public ResponseEntity deleteGoal(Principal principal,
                                     @PathVariable("goal-id") @Positive long goalId) {
        long memberId;
        try {
            memberId = memberService.findMemberId(principal.getName());
        } catch (NullPointerException e) {
            return new ResponseEntity<>("회원정보 없음", HttpStatus.OK);
        }

        goalService.deleteGoal(goalId, memberId);
        return new ResponseEntity<>("성공적으로 삭제되었습니다.",HttpStatus.OK);
    }
}

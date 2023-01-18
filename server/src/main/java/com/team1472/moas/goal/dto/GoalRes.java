package com.team1472.moas.goal.dto;

import com.team1472.moas.goal.entity.Goal;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class GoalRes {
    private long id; //목표ID
    private long memberId; //회원ID
    private String url; //이미지 url
    private String goalName; //목표명
    private long price; //목표 금액
    private long monthlyPayment; //월 납입금
    private int period; //기간
    private int progress; //진척도(%)
    private Goal.GoalStatus status; //목표 진행상태
    private LocalDateTime createdAt; //목표 생성시간
    private LocalDateTime modifiedAt; //목표 수정시간
}

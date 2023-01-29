package com.team1472.moas.goal.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;

@Getter
@Setter
@AllArgsConstructor
public class GoalPatchReq {
    @NotBlank(message = "목표명은 공백이 아니어야 합니다.")
    private String goalName; //목표명
    @NotNull(message = "반드시 목표 금액이 존재해야 합니다.")
    @Positive(message = "정확한 금액을 입력해주세요.")
    private long price; //목표 금액
    @NotNull(message = "반드시 월 납입금액이 존재해야 합니다.")
    @Positive(message = "정확한 금액을 입력해주세요.")
    private long monthlyPayment; //월 납입금
    private String url; //이미지 url
}

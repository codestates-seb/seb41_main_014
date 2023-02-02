package com.team1472.moas.like_savings.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Getter
public class RegisterLikeSavingProductReq {
    @NotBlank
    private String finPrdtCd; //금융 상품 코드 => FK로 사용

    @NotBlank
    @Pattern(regexp = "^[SM]$", message = "입력 형식에 맞지 않습니다.")
    private String intrRateType; // 저축 금리 유형

    @NotBlank
    @Pattern(regexp = "^[SF]$",message = "입력 형식에 맞지 않습니다.")
    private String rsrvType; //적립 유형

    @NotBlank
    private String saveTrm; // 저축 기간(단위: 개월)
}

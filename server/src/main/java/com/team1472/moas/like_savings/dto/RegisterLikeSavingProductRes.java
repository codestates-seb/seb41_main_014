package com.team1472.moas.like_savings.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RegisterLikeSavingProductRes {
    private long LikeId;

    private long memberId;

    private String finPrdtCd; //금융 상품 코드 => FK로 사용

    private String intrRateType; // 저축 금리 유형

    private String rsrvType; //적립 유형

    private String saveTrm; // 저축 기간(단위: 개월)

}

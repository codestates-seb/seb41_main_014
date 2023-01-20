package com.team1472.moas.like_savings.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class LikeSavingProductsRes {
    private long likeSavingId; //관심 적금 id

    private String korCoNm; //금융회사 명

    private String finPrdtNm; //금융상품명

    private String joinWay; //가입 방법

    private String spclCnd; //우대 조건

    private String joinDeny; //가입제한

    private String joinMember; //가입 대상

    private String etcNote; //기타 유의사항

    private int maxLimit; //최고 한도

    private String intrRateType; // 저축 금리 유형

    private String intrRateTypeNm; // 저축 금리 유형명

    private String rsrvTypeNm; //적립 유형명

    private String saveTrm; // 저축 기간(단위: 개월)

    private String mtrtInt; //만기 후 이자율

    private double intrRate; //저축 금리(소수점 2자리)

    private double intrRate2; //최고 우대 금리(소수점 2자리)
}

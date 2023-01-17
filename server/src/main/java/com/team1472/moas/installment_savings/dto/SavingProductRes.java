package com.team1472.moas.installment_savings.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@NoArgsConstructor
@AllArgsConstructor
public class SavingProductRes {
    private long savingsId; //적금 상품 id

    private long interestId; //금리 id

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

    @Setter
    private long interestAmount; //세후 이자 금액 (세전 이자 금액 - 세금(15.4%))

    public SavingProductRes(long savingsId, long interestId, String korCoNm, String finPrdtNm, String joinWay,
                            String spclCnd, String joinDeny, String joinMember, String etcNote, int maxLimit,
                            String intrRateType, String intrRateTypeNm, String rsrvTypeNm, String saveTrm,
                            String mtrtInt, double intrRate, double intrRate2) {
        this.savingsId = savingsId;
        this.interestId = interestId;
        this.korCoNm = korCoNm;
        this.finPrdtNm = finPrdtNm;
        this.joinWay = joinWay;
        this.spclCnd = spclCnd;
        this.joinDeny = joinDeny;
        this.joinMember = joinMember;
        this.etcNote = etcNote;
        this.maxLimit = maxLimit;
        this.intrRateType = intrRateType;
        this.intrRateTypeNm = intrRateTypeNm;
        this.rsrvTypeNm = rsrvTypeNm;
        this.saveTrm = saveTrm;
        this.mtrtInt = mtrtInt;
        this.intrRate = intrRate;
        this.intrRate2 = intrRate2;
    }
}

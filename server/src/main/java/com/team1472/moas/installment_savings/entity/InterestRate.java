package com.team1472.moas.installment_savings.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class InterestRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String finCoNo; //금융 회사 코드

    private String finPrdtCd; //금융 상품 코드 => FK로 사용

    private String intrRateType; // 저축 금리 유형

    private String intrRateTypeNm; // 저축 금리 유형명

    private String rsrvType; //적립 유형

    private String rsrvTypeNm; //적립 유형명

    private String saveTrm; // 저축 기간(단위: 개월)

    private double intrRate; //저축 금리(소수점 2자리)

    private double intrRate2; //최고 우대 금리(소수점 2자리)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INSTALLMENTSAVINGS_ID")
    private InstallmentSavings installmentSavings;

    public void addInstallmentSavings(InstallmentSavings installmentSavings) {
        this.installmentSavings = installmentSavings;
    }

}


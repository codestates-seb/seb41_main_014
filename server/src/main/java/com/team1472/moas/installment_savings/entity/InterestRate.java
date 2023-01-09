package com.team1472.moas.installment_savings.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InterestRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String fin_co_no; //금융 회사 코드

    private String fin_prdt_cd; //금융 상품 코드 => FK로 사용

    private String intr_rate_type; // 저축 금리 유형

    private String intr_rate_type_nm; // 저축 금리 유형명

    private String rsrv_type; //적립 유형

    private String rsrv_type_nm; //적립 유형명

    private String save_trm; // 저축 기간(단위: 개월)

    private double intr_rate; //저축 금리(소수점 2자리)

    private double intr_rate2; //최고 우대 금리(소수점 2자리)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "INSTALLMENTSAVINGS_ID")
    private InstallmentSavings installmentSavings;

}

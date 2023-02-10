package com.team1472.moas.installment_savings.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class InstallmentSavings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String finCoNo; //금융회사 코드

    private String korCoNm; //금융회사 명

    private String finPrdtCd; //금융 상품 코드

    private String finPrdtNm; //금융상품명

    private String joinWay; //가입 방법

    @Column(columnDefinition = "TEXT")
    private String mtrtInt; //만기 후 이자율

    @Column(columnDefinition = "TEXT")
    private String spclCnd; //우대 조건

    private String joinDeny; //가입제한

    @Column(columnDefinition = "TEXT")
    private String joinMember; //가입 대상

    @Column(columnDefinition = "TEXT")
    private String etcNote; //기타 유의사항

    private int maxLimit; //최고 한도

}

package com.team1472.moas.installment_savings.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class InstallmentSavings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long fin_co_no; //금융회사 코드

    private String kor_co_nm; //금융회사 명

    private long fin_prdt_cd; //금융 상품 코드

    private String fin_prdt_nm; //금융상품명

    private String join_way; //가입 방법

    @Column(columnDefinition = "TEXT")
    private String mtrt_int; //만기 후 이자율

    @Column(columnDefinition = "TEXT")
    private String spcl_cnd; //우대 조건

    private int join_deny; //가입제한

    @Column(columnDefinition = "TEXT")
    private String join_member; //가입 대상

    @Column(columnDefinition = "TEXT")
    private String etc_note; //기타 유의사항

    private int max_limit; //최고 한도

    @OneToMany(mappedBy = "installmentSavings", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
    private List<InterestRate> interestRates = new ArrayList<>();

}

package com.team1472.moas.like_savings.entity;

import com.team1472.moas.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class LikeSavings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String finPrdtCd; //금융 상품 코드 => FK로 사용

    private String intrRateType; // 저축 금리 유형

    private String rsrvType; //적립 유형

    private String saveTrm; // 저축 기간(단위: 개월)

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void addMember(Member member) {
        this.member = member;
    }

}

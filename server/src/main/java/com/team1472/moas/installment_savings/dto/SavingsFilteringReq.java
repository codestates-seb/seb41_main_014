package com.team1472.moas.installment_savings.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;
import java.util.List;

@Getter
@Setter
public class SavingsFilteringReq {
    @Positive(message = "정확한 금액을 입력해주세요.")
    private long monthlySavings; //월 납입 금액

    private String saveTrm; //저축 희망 기간

    @Positive(message = "정확한 금액을 입력해주세요.")
    private long totalSavings; //총 저축 금액

    private String rsrvType; //저축 방식 - 정액적립식: "S", 자유적립식: "F"

    private List<String> finCoNoList; //은행 선택

    private String intrRateType; //이자 계산 방식 - 단리: "S", 복리: "M"

    private String joinDeny; //가입 대상 - 제한 없음: “1”, 서민전용: “2”, 일부제한: ”3”
}


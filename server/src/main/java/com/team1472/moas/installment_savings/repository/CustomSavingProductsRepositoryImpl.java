package com.team1472.moas.installment_savings.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team1472.moas.installment_savings.dto.SavingProductRes;
import com.team1472.moas.installment_savings.dto.SavingsFilteringReq;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.function.Function;

import static com.team1472.moas.installment_savings.entity.QInstallmentSavings.installmentSavings;
import static com.team1472.moas.installment_savings.entity.QInterestRate.interestRate;

@Repository
@RequiredArgsConstructor
public class CustomSavingProductsRepositoryImpl implements CustomSavingProductsRepository {
    private final JPAQueryFactory jpaQueryFactory;

    //적금 상품 필터링해서 조회
    @Override
    public Page<SavingProductRes> findFilteringSavingProducts(Pageable pageable, SavingsFilteringReq savingsFilteringReq) {
        int page = pageable.getPageNumber();
        int size = pageable.getPageSize();

        List<SavingProductRes> savings = jpaQueryFactory.select(
                        Projections.constructor(SavingProductRes.class,
                                installmentSavings.korCoNm,
                                installmentSavings.finPrdtNm,
                                installmentSavings.joinWay,
                                installmentSavings.spclCnd,
                                installmentSavings.joinDeny,
                                installmentSavings.joinMember,
                                installmentSavings.etcNote,
                                installmentSavings.maxLimit,
                                interestRate.intrRateType,
                                interestRate.intrRateTypeNm,
                                interestRate.rsrvTypeNm,
                                interestRate.saveTrm,
                                installmentSavings.mtrtInt,
                                interestRate.intrRate,
                                interestRate.intrRate2))
                .from(interestRate)
                .join(installmentSavings).on(interestRate.finPrdtCd.eq(installmentSavings.finPrdtCd)).fetchJoin()
                .where(checkCondition(savingsFilteringReq.getFinCoNoList(), installmentSavings.finCoNo::in), //주 거래 은행 필터링
                        checkCondition(savingsFilteringReq.getSaveTrm(), interestRate.saveTrm::eq), //저축 희망 기간 필터링
                        checkCondition(savingsFilteringReq.getRsrvType(), interestRate.rsrvType::eq), //적립 방식 필터링
                        checkCondition(savingsFilteringReq.getIntrRateType(), interestRate.intrRateType::eq), //이자 적립 방식 필터링
                        checkCondition(savingsFilteringReq.getJoinDeny(), installmentSavings.joinDeny::in), //가입 대상 필터링
                        (installmentSavings.maxLimit.goe(savingsFilteringReq.getMonthlySavings())
                                .or(installmentSavings.maxLimit.eq(0)))) //월 납입 한도 필터링
                .orderBy(interestRate.intrRate.desc(), interestRate.intrRate2.desc())
                .offset((long) page * size).limit(size)
                .fetch();

        //필터링 한 후 전체 데이터 개수
        long totalCount = jpaQueryFactory
                .from(interestRate)
                .join(installmentSavings).on(interestRate.finPrdtCd.eq(installmentSavings.finPrdtCd)).fetchJoin()
                .where(checkCondition(savingsFilteringReq.getFinCoNoList(), installmentSavings.finCoNo::in), //주 거래 은행 필터링
                        checkCondition(savingsFilteringReq.getSaveTrm(), interestRate.saveTrm::eq), //저축 희망 기간 필터링
                        checkCondition(savingsFilteringReq.getRsrvType(), interestRate.rsrvType::eq), //적립 방식 필터링
                        checkCondition(savingsFilteringReq.getIntrRateType(), interestRate.intrRateType::eq), //이자 적립 방식 필터링
                        checkCondition(savingsFilteringReq.getJoinDeny(), installmentSavings.joinDeny::in), //가입 대상 필터링
                        (installmentSavings.maxLimit.goe(savingsFilteringReq.getMonthlySavings())
                                .or(installmentSavings.maxLimit.eq(0)))) //월 납입 한도 필터링
                .fetch().size();

        return new PageImpl<>(savings, pageable, totalCount);

    }

    // 필터링 조건 존재 여부에 따라 where 조건 추가
    private <T> BooleanExpression checkCondition(T value, Function<T, BooleanExpression> function) {
        if (value instanceof String) { //value의 타입이 String인 경우 빈 문자열이 넘어오면 null 처리
            if (value.equals("")) {
                value = null;
            }
        } else if (value instanceof List) { //value의 타입이 List인 경우 빈 리스트가 넘어오면 null 처리
            if (((List<?>) value).size() == 0) {
                value = null;
            }
        }

        return Optional.ofNullable(value).map(function).orElse(null);
    }

}

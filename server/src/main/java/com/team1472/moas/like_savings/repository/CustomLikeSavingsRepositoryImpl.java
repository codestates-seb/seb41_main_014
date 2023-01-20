package com.team1472.moas.like_savings.repository;

import com.querydsl.core.types.Projections;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team1472.moas.like_savings.dto.LikeSavingProductsRes;
import com.team1472.moas.like_savings.entity.LikeSavings;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

import static com.team1472.moas.installment_savings.entity.QInstallmentSavings.installmentSavings;
import static com.team1472.moas.installment_savings.entity.QInterestRate.interestRate;
import static com.team1472.moas.like_savings.entity.QLikeSavings.likeSavings;

@Repository
@RequiredArgsConstructor
public class CustomLikeSavingsRepositoryImpl implements CustomLikeSavingsRepository {
    private final JPAQueryFactory jpaQueryFactory;

    //관심 적금 아이디와 회원 아이디가 일치하는 관심 적금 정보 조회
    @Override
    public Optional<LikeSavings> findByLikeSavingIdAndMemberId(long likeSavingId, long memberId) {
        return Optional.ofNullable(jpaQueryFactory.selectFrom(likeSavings)
                .where(likeSavings.id.eq(likeSavingId),
                        likeSavings.member.id.eq(memberId))
                .fetchOne());
    }

    //회원의 관심 적금 목록 조회
    @Override
    public Page<LikeSavingProductsRes> findLikeSavingProductsByMemberId(long memberId, Pageable pageable) {
        int page = pageable.getPageNumber();
        int size = pageable.getPageSize();

        List<LikeSavingProductsRes> likeSavingProducts = jpaQueryFactory.select(Projections.constructor(LikeSavingProductsRes.class,
                        likeSavings.id,
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
                .leftJoin(likeSavings).on(likeSavings.finPrdtCd.eq(installmentSavings.finPrdtCd)
                        .and(likeSavings.intrRateType.eq(interestRate.intrRateType))
                        .and(likeSavings.rsrvType.eq(interestRate.rsrvType))
                        .and(likeSavings.saveTrm.eq(interestRate.saveTrm))
                ).fetchJoin()
                .where(likeSavings.member.id.eq(memberId))
                .offset((long) page * size).limit(size)
                .orderBy(interestRate.intrRate.desc())
                .fetch();

        //필터링 한 후 전체 데이터 개수
        long totalCount = jpaQueryFactory
                .from(interestRate)
                .leftJoin(likeSavings).on(likeSavings.finPrdtCd.eq(interestRate.finPrdtCd)
                        .and(likeSavings.intrRateType.eq(interestRate.intrRateType))
                        .and(likeSavings.rsrvType.eq(interestRate.rsrvType))
                        .and(likeSavings.saveTrm.eq(interestRate.saveTrm))
                )
                .where(likeSavings.member.id.eq(memberId))
                .fetch().size();

        return new PageImpl<>(likeSavingProducts, pageable, totalCount);
    }
}

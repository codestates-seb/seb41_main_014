package com.team1472.moas.like_savings.repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.team1472.moas.like_savings.entity.LikeSavings;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Repository;

import java.util.Optional;

import static com.team1472.moas.like_savings.entity.QLikeSavings.likeSavings;

@Repository
@RequiredArgsConstructor
public class CustomLikeSavingsRepositoryImpl implements CustomLikeSavingsRepository {
    private final JPAQueryFactory jpaQueryFactory;

    //관심 적금 아이디와 회원 아이디가 일치하는 관심 적금 정보 조회
    @Override
    public Optional<LikeSavings> findByLikeSavingIdAndMemberId(long likeSavingId, long memberId) {
        return Optional.ofNullable(jpaQueryFactory.selectFrom(likeSavings)
                .where(likeSavings.Id.eq(likeSavingId),
                        likeSavings.member.id.eq(memberId))
                .fetchOne());
    }
}

package com.team1472.moas.like_savings.repository;

import com.team1472.moas.like_savings.entity.LikeSavings;

import java.util.Optional;

public interface CustomLikeSavingsRepository {
    //관심 적금 아이디와 회원 아이디가 일치하는 관심 적금 정보 조회
    Optional<LikeSavings> findByLikeSavingIdAndMemberId(long likeSavingId, long memberId);
}

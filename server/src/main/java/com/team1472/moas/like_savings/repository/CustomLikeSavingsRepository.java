package com.team1472.moas.like_savings.repository;

import com.team1472.moas.like_savings.dto.LikeSavingProductsRes;
import com.team1472.moas.like_savings.entity.LikeSavings;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

public interface CustomLikeSavingsRepository {
    //관심 적금 아이디와 회원 아이디가 일치하는 관심 적금 정보 조회
    Optional<LikeSavings> findByLikeSavingIdAndMemberId(long likeSavingId, long memberId);

    //회원의 관심 적금 조회
    Page<LikeSavingProductsRes> findLikeSavingProductsByMemberId(long memberId, Pageable pageable);

    //관심 적금 목록 존재 여부
    boolean existsInterestSavings(long memberId, LikeSavings findLikeSaving);
}

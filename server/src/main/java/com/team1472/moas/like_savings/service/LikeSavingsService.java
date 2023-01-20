package com.team1472.moas.like_savings.service;

import com.team1472.moas.exception.BusinessLogicException;
import com.team1472.moas.exception.ExceptionCode;
import com.team1472.moas.like_savings.dto.LikeSavingProductsRes;
import com.team1472.moas.like_savings.entity.LikeSavings;
import com.team1472.moas.like_savings.repository.LikeSavingsRepository;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional
public class LikeSavingsService {
    private final LikeSavingsRepository likeSavingsRepository;
    private final MemberService memberService;

    //관심 적금 등록
    public LikeSavings RegisterInterestInSavings(long memberId, LikeSavings likeSavings) {
        Member member = memberService.findMember(memberId);
        likeSavings.addMember(member);

        return likeSavingsRepository.save(likeSavings);
    }

    //관심 적금 삭제
    public void deleteLikeSavingProduct(long memberId, long interestId) {
        LikeSavings findLikeSavings = verifyExistsLikeSavingsOfMember(interestId, memberId);
        likeSavingsRepository.delete(findLikeSavings);
    }

    //멤버의 관심 적금 목록 조회
    public Page<LikeSavingProductsRes> getLikeSavingProducts(long memberId, Pageable pageable) {
        return likeSavingsRepository.findLikeSavingProductsByMemberId(memberId, pageable);
    }

    //해당 멤버가 관심 등록한 적금인지 확인
    private LikeSavings verifyExistsLikeSavingsOfMember(long interestId, long memberId) {

        return likeSavingsRepository.findByLikeSavingIdAndMemberId(interestId, memberId)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.LIKE_SAVINGS_NOT_FOUND));
    }

}

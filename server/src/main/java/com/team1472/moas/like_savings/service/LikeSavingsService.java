package com.team1472.moas.like_savings.service;

import com.team1472.moas.like_savings.entity.LikeSavings;
import com.team1472.moas.like_savings.repository.LikeSavingsRepository;
import com.team1472.moas.member.entity.Member;
import com.team1472.moas.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class LikeSavingsService {
    private final LikeSavingsRepository likeSavingsRepository;
    private final MemberService memberService;

    //관심 적금 등록
    @Transactional
    public LikeSavings RegisterInterestInSavings(long memberId, LikeSavings likeSavings) {
        Member member = memberService.findMember(memberId);
        likeSavings.addMember(member);

        return likeSavingsRepository.save(likeSavings);
    }
}

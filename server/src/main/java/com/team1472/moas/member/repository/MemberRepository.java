package com.team1472.moas.member.repository;

import com.team1472.moas.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findById(long memberId);
}

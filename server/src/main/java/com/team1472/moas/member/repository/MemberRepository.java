package com.team1472.moas.member.repository;

import com.team1472.moas.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;


public interface MemberRepository extends JpaRepository<Member, Long> {
    Member findById(long memberId);
    Optional<Member> findByEmail(String email);
    Optional<Member> findByName(String name);
    List<Member> findByNameContaining(String name);
    boolean existsByName(String name);
    boolean existsByEmail(String email);
}


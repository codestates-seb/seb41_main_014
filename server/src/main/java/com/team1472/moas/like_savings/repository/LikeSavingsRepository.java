package com.team1472.moas.like_savings.repository;

import com.team1472.moas.like_savings.entity.LikeSavings;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeSavingsRepository extends JpaRepository<LikeSavings, Long>, CustomLikeSavingsRepository {

}

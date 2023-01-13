package com.team1472.moas.installment_savings.repository;

import com.team1472.moas.installment_savings.entity.InterestRate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface InterestRateRepository extends JpaRepository<InterestRate, Long> {
}

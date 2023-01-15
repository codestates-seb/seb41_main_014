package com.team1472.moas.installment_savings.repository;

import com.team1472.moas.installment_savings.entity.InstallmentSavings;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface InstallmentSavingsRepository extends JpaRepository<InstallmentSavings, Long> {
    Optional<InstallmentSavings> findByfinPrdtCd(String productCode);
}

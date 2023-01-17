package com.team1472.moas.goal.repository;

import com.team1472.moas.goal.entity.Goal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface GoalRepository extends JpaRepository<Goal, Long> {
}


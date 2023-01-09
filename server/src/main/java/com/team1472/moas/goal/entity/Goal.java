package com.team1472.moas.goal.entity;

import com.team1472.moas.member.entity.Member;
import com.team1472.moas.util.audi.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@NoArgsConstructor
@Getter
@Entity
public class Goal extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //목표ID

    @Column(length = 1000)
    private String goalName; //목표명

    @Column(nullable = false)
    private long price; //가격

    @Column(nullable = false)
    private long principle; //원금

    @Column(nullable = false)
    private long monthly_payment; //월 납입금

    @Column(nullable = false)
    private LocalDateTime payment_start; //납입 시작일

    @Column(nullable = false)
    private int period; //납입 기간

    @Column(length = 1000)
    private String url;

    @Enumerated(value = EnumType.STRING)
    private GoalStatus status = GoalStatus.PROGRESS; //진행중이 기본값
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "MEMBER_ID")
    @Setter
    private Member member;

    public void addMember(Member member) {
        this.member = member;

        if (!this.member.getGoals().contains(this)) {
            this.member.addGoal(this);
        }
    }

    public enum GoalStatus {
        PROGRESS("진행중"),
        COMPLETED("완료");

        @Getter
        private String status;

        GoalStatus(String status) {
            this.status = status;
        }
    }
}

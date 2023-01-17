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
@Setter
@Entity
public class Goal extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id; //목표ID

    @Column(length = 1000)
    private String goalName; //목표명

    @Column(nullable = false)
    private long price; //목표 금액

    @Column(nullable = false)
    private long principle; //원금

    @Column(nullable = false)
    private long monthlyPayment; //월 납입금

    @Column
    private int period; //납입 기간 = (목표금액 - 원금)/월 납입금

    @Column
    private String url; //이미지 url

    @Column
    private int progress = 0; //진척도(%)

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

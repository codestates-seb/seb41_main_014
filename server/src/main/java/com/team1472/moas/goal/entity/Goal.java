package com.team1472.moas.goal.entity;

import com.team1472.moas.member.entity.Member;
import com.team1472.moas.util.audi.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.temporal.ChronoUnit;

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
    private long monthlyPayment; //월 납입금

    @Column
    private int period; //납입 기간 = 목표금액 / 월 납입금

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

    //납입기간 설정 = (목표금액)/월 납입금
    //목표 등록하는 순간에 한 달치 입금되었다고 가정
    public void savePeriod() {
        //월 납입금이 목표 금액보다 크거나 같을 때 -> 0개월 걸림
        if (this.getMonthlyPayment() >= this.getPrice()) {
            this.setPeriod(0);
        }
        //목표 금액이 월 납입금보다 클 때
        else {
            int period = (int) Math.ceil((double) this.getPrice() / this.getMonthlyPayment());
            if (period - 1 > 0) {
                this.setPeriod(period - 1);
            }
        }
    }

    //status 설정
    public void saveStatus() {
        if (this.getProgress() == 100) {
            this.setStatus(Goal.GoalStatus.COMPLETED);
        } else {
            this.setStatus(Goal.GoalStatus.PROGRESS);
        }
    }

    //진척도(%) 설정
    //목표 등록하는 순간에 한 달치 입금되었다고 가정
    public void saveProgress() {
        LocalDate createdDate;
        if (this.getCreatedAt() == null) {
            createdDate = LocalDate.now();
        } else {
            createdDate = this.getCreatedAt().toLocalDate(); //목표 생성 시간
        }
        LocalDate localDate = LocalDate.now(); //현재 시간

        double month = (double) ChronoUnit.MONTHS.between(createdDate, localDate); //경과한 시간 (단위: 월)
        int goalPeriod = this.getPeriod() + 1; //설정된 납부 기간 + 1

        //만약 0개월 걸릴 때
        if (goalPeriod == 1) {
            this.setProgress(100);
        } else {
            double progress = (month + 1) / goalPeriod * 100;
            int result = (int) Math.round(progress);
            this.setProgress(result);
        }
    }
}

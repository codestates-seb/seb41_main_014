package com.team1472.moas.member.entity;


import com.team1472.moas.goal.entity.Goal;
import com.team1472.moas.util.audi.Auditable;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@Getter
@Entity
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, updatable = false, unique = true)
    private String email; // 사용자 이메일

    @Column(nullable = false, updatable = false)
    private String name; // 사용자 이름

    @Column(nullable = false)
    private String nickname; // 사용자 별명

    @Enumerated(EnumType.STRING)
    private MemberStatus status = MemberStatus.MEMBER_ACTIVE; // 사용자 활동중이 기본값
    @OneToMany(mappedBy = "member")
    private List<Goal> goals = new ArrayList<>();

    public void addGoal(Goal goal) {
        this.goals.add(goal);
        if (goal.getMember() != this) {
            goal.setMember(this);
        }
    }

    public enum MemberStatus {
        MEMBER_EXIST("이미 존재하는 사용자"),
        MEMBER_ACTIVE("활동중"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }
}

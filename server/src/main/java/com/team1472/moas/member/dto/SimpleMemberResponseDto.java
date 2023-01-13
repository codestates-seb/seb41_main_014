package com.team1472.moas.member.dto;

import com.team1472.moas.member.entity.Role;
import lombok.*;

import java.time.LocalDateTime;

@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class SimpleMemberResponseDto {

    private Long memberId;

    private String email;

    private String name;

    private String picture;

    private Role role;

    private LocalDateTime createdAt;

    private LocalDateTime modifiedAt;

    private String content;
}

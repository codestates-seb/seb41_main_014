package com.team1472.moas.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    NAME_ALREADY_EXISTS(402, "중복된 닉네임입니다."),
    MEMBER_NOT_EXISTS(404, "멤버가 존재하지 않습니다"),
    EMAIL_ALREADY_EXISTS(404, "중복된 이메일입니다."),

    GOAL_NOT_FOUND(404,"해당 목표를 찾을 수 없습니다."),
    LIKE_SAVINGS_NOT_FOUND(404, "해당 관심 적금을 찾을 수 없습니다.");

    private int status;
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}

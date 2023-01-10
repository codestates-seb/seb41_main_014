package com.team1472.moas.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    GOAL_NOT_FOUND(404,"해당 목표를 찾을 수 없습니다.");

    private int status;
    private String message;

    ExceptionCode(int status, String message) {
        this.status = status;
        this.message = message;
    }
}

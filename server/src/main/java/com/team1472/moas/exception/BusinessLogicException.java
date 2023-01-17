package com.team1472.moas.exception;

import lombok.Getter;

@Getter
public class BusinessLogicException extends RuntimeException {
    private ExceptionCode exceptionCode;

    public BusinessLogicException(ExceptionCode exceptionCode) {
        super(exceptionCode.getMessage());
        this.exceptionCode = exceptionCode;
    }
}


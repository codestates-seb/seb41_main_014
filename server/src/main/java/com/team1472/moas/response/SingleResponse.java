package com.team1472.moas.response;

import lombok.Getter;

@Getter
public class SingleResponse<T> {
    private T data;
}

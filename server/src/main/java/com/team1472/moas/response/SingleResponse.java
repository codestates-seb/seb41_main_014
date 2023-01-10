package com.team1472.moas.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class SingleResponse<T> {
    private T data;
}

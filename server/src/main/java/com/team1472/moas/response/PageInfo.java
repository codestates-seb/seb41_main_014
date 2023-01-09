package com.team1472.moas.response;

import lombok.AllArgsConstructor;

@AllArgsConstructor
public class PageInfo {
    private int page;
    private int size;
    private long totalElements;
    private int totalPages;
}

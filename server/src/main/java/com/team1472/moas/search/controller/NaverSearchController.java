package com.team1472.moas.search.controller;

import com.team1472.moas.util.secret.OpenApiAuthKey;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.json.simple.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
@Tag(name = "NaverSearch", description = "네이버 검색 API")
public class NaverSearchController {
    private final OpenApiAuthKey authKey;

    /*
     * 목표 검색
     * @param query
     * */
    @GetMapping("/search")
    public JSONObject search(@RequestParam String query,
                             @RequestParam Integer display,
                             @RequestParam Integer start) {
        Mono<JSONObject> mono = WebClient.builder().baseUrl("https://openapi.naver.com")
                .build().get()
                .uri(builder -> builder.path("/v1/search/shop.json")
                        .queryParam("query",query)
                        .queryParam("display",display)
                        .queryParam("start",start)
                        .build()
                )
                .header("X-Naver-Client-Id", authKey.getNaverClientId())
                .header("X-Naver-Client-Secret", authKey.getNaverClientSecret())
                .exchangeToMono(response -> {
                    return response.bodyToMono(JSONObject.class);
                });
        return mono.block();
    }
}

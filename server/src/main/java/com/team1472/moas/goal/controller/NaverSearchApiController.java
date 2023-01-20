package com.team1472.moas.goal.controller;

import com.team1472.moas.goal.service.NaverSearchApiService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/api")
@Tag(name = "NaverSearch", description = "네이버 검색 API")
public class NaverSearchApiController {
    private final NaverSearchApiService naverSearchApiService;

    /*
    * 목표 검색
    * @param query
    * */
    @Operation(summary = "목표 검색")
    @ResponseBody
    @GetMapping("/search")
    public ResponseEntity<JSONObject> getGoal(@RequestParam("query") String query) throws Exception {
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(naverSearchApiService.search(query));
        JSONObject jsonObj = (JSONObject) obj;
        return ResponseEntity.ok(jsonObj);
    }
}

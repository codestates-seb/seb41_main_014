package com.team1472.moas.goal.controller;

import com.team1472.moas.goal.service.NaverSearchApiService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/open-api")
public class NaverSearchApiController {
    private final NaverSearchApiService naverSearchApiService;

    @ResponseBody
    @GetMapping("/search")
    public ResponseEntity<JSONObject> getGoal(@RequestParam("query") String query) throws Exception {
        JSONParser parser = new JSONParser();
        Object obj = parser.parse(naverSearchApiService.search(query));
        JSONObject jsonObj = (JSONObject) obj;
        return ResponseEntity.ok(jsonObj);
    }
}

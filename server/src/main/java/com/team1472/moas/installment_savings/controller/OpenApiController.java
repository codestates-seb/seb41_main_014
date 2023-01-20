package com.team1472.moas.installment_savings.controller;

import com.team1472.moas.installment_savings.service.OpenApiService;
import com.team1472.moas.util.secret.OpenApiAuthKey;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;

@Slf4j
@RestController
@RequestMapping("/open-api")
@RequiredArgsConstructor
public class OpenApiController {
    private final OpenApiService openApiService;
    private final OpenApiAuthKey authKey;

    /**
     * Open API를 통한 적금 정보 조회 후 DB 저장
     */
    @GetMapping("/savings")
    public ResponseEntity saveInstallmentSavingsInfo() throws IOException {
        callOpenApi();

        return new ResponseEntity<>(HttpStatus.OK);
    }

    /**
     * Open API를 통한 적금 정보 자동 업데이트
     * 매일 새벽 4시 자동 업데이트
     */
    @Scheduled(cron = "0 0 4 * * ?") // 매일 새벽 4시 자동 업데이트
    @GetMapping("/refresh")
    public void deleteAndSaveInstallmentSavingsInfo() throws IOException {
        log.info("적금 정보 자동 업데이트 시작");
        openApiService.deleteAllData();
        callOpenApi();
    }

    /**
     * DB에 저장되어 있는 적금 정보 모두 삭제
     */
    @DeleteMapping("/savings")
    public void deleteInstallmentSavingsInfo() {
        openApiService.deleteAllData();
    }

    // 금융감독원 적금 조회 Open API 호출
    private void callOpenApi() throws IOException {
        int totalPageNum = 1; // 전체 페이지 수
        int curPageNum = 1; // 현재 페이지 수

        do {
            StringBuilder urlBuilder = new StringBuilder("http://finlife.fss.or.kr/finlifeapi/savingProductsSearch.json");
            urlBuilder.append("?auth=" + authKey.getKey());
            urlBuilder.append("&topFinGrpNo=020000"); //권역번호 : 020000(은행)
            urlBuilder.append("&pageNo=" + curPageNum);

            URL url = new URL(urlBuilder.toString());

            HttpURLConnection conn = (HttpURLConnection) url.openConnection();
            conn.setRequestMethod("GET");
            conn.setRequestProperty("Content-type", "application/json");

            BufferedReader rd = new BufferedReader(new InputStreamReader(conn.getInputStream()));

            StringBuilder sb = new StringBuilder();
            String line;
            while ((line = rd.readLine()) != null) {
                sb.append(line);
            }
            String data = sb.toString();
            rd.close();
            conn.disconnect();

            totalPageNum = openApiService.getInstallmentSavingsInfo(data);
            curPageNum++;

        } while (curPageNum <= totalPageNum);
    }
}

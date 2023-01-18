package com.team1472.moas.goal.service;

import com.team1472.moas.util.secret.OpenApiAuthKey;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.io.*;
import java.net.*;
import java.util.HashMap;
import java.util.Map;

@Component
@RequiredArgsConstructor
public class NaverSearchApiService {
    private final OpenApiAuthKey authKey;
    public String search(String query) {
        try {
            //검색어 인코딩
            query = URLEncoder.encode(query, "UTF-8");
        } catch (UnsupportedEncodingException e) {
            throw new RuntimeException("검색어 인코딩 실패", e);
        }
        //URL 세팅
        String apiURL = "https://openapi.naver.com/v1/search/shop.json?query=" + query;

        //헤더 키-값 세팅
        Map<String, String> requestHeaders = new HashMap<>();
        requestHeaders.put("X-Naver-Client-Id", authKey.getNaverClientId());
        requestHeaders.put("X-Naver-Client-Secret", authKey.getNaverClientSecret());
        String responseBody = get(apiURL,requestHeaders);
        return responseBody;
    }

    //URL 연결 요청
    private String get(String apiURL, Map<String, String> requestHeaders) {
        HttpURLConnection con = connect(apiURL);
        try {
            con.setRequestMethod("GET");
            for (Map.Entry<String, String> header : requestHeaders.entrySet()) {
                con.setRequestProperty(header.getKey(), header.getValue());
            }
            int responseCode = con.getResponseCode();
            if (responseCode == HttpURLConnection.HTTP_OK) { //정상 호출
                return readBody(con.getInputStream());
            } else { //오류 발생
                return readBody(con.getErrorStream());
            }
        } catch (IOException e) {
            throw new RuntimeException("API 요청과 응답 실패", e);
        } finally {
            con.disconnect();
        }
    }

    //URL 연결 메서드
    private HttpURLConnection connect(String apiURL) {
        try {
            URL url = new URL(apiURL);
            return (HttpURLConnection) url.openConnection();
        } catch (MalformedURLException e) {
            throw new RuntimeException("API URL이 잘못되었습니다. : " + apiURL, e);
        } catch (IOException e) {
            throw new RuntimeException("연결이 실패했습니다. : " + apiURL, e);
        }
    }

    //API 응답 조회 메서드
    private String readBody(InputStream body) {
        InputStreamReader streamReader = new InputStreamReader(body);

        try (BufferedReader lineReader = new BufferedReader(streamReader)) {
            StringBuilder responseBody = new StringBuilder();
            String line;
            while ((line = lineReader.readLine()) != null) {
                responseBody.append(line);
            }
            return responseBody.toString();
        } catch (IOException e) {
            throw new RuntimeException("API 응답을 읽는데 실패했습니다.", e);
        }
    }
}

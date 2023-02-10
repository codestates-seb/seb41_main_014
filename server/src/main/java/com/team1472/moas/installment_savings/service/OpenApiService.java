package com.team1472.moas.installment_savings.service;

import com.google.gson.*;
import com.team1472.moas.installment_savings.entity.InstallmentSavings;
import com.team1472.moas.installment_savings.entity.InterestRate;
import com.team1472.moas.installment_savings.repository.InstallmentSavingsRepository;
import com.team1472.moas.installment_savings.repository.InterestRateRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Arrays;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional
public class OpenApiService {
    private final InstallmentSavingsRepository installmentSavingsRepository;
    private final InterestRateRepository interestRateRepository;

    //금융감독원 적금 정보 파싱 후 DB 저장
    public int getInstallmentSavingsInfo(String jsonData) {
        Gson gson = new GsonBuilder()
                .setFieldNamingPolicy(FieldNamingPolicy.LOWER_CASE_WITH_UNDERSCORES)
                .create();

        JsonElement element = JsonParser.parseString(jsonData);
        JsonObject object = element.getAsJsonObject();

        JsonObject result = object.getAsJsonObject("result");

        if (!checkSuccessfulApiCall(result)) { //에러 발생 여부 확인
            return 0;
        }

        int totalPageNum = result.get("max_page_no").getAsInt();

        JsonArray baseList = result.get("baseList").getAsJsonArray(); //적금 기본 정보 리스트
        List<InstallmentSavings> savingsList = parseInstallmentSavingsInfo(baseList, gson);

        JsonArray optionList = result.get("optionList").getAsJsonArray(); //적금 이자율에 대한 정보 리스트
        List<InterestRate> interestRateList = parseInterestRateInfo(optionList, gson);

        installmentSavingsRepository.saveAll(savingsList);
        interestRateRepository.saveAll(interestRateList);

        return totalPageNum;
    }

    //에러 발생 여부 확인
    private boolean checkSuccessfulApiCall(JsonObject response) {
        String errorCode = response.get("err_cd").getAsString();

        if (!errorCode.equals("000")) {
            log.error("적금 조회 Open API 호출 실패 [응답 코드: " + errorCode + " 응답 메시지: " + response.get("err_msg") + "]");
            return false;
        }

        return true;
    }

    //적금 상품에 대한 기본 정보 파싱
    private List<InstallmentSavings> parseInstallmentSavingsInfo(JsonArray baseList, Gson gson) {
        InstallmentSavings[] installmentSavings = gson.fromJson(baseList, InstallmentSavings[].class);

        return Arrays.asList(installmentSavings);
    }

    //적금 상품의 이자율 정보 파싱
    private List<InterestRate> parseInterestRateInfo(JsonArray optionList, Gson gson) {
        InterestRate[] interestRates = gson.fromJson(optionList, InterestRate[].class);

        return Arrays.asList(interestRates);
    }

    // 적금, 이자 정보 데이터 전부 삭제
    public void deleteAllData() {
        interestRateRepository.deleteAllInBatch();
        installmentSavingsRepository.deleteAllInBatch();
    }
}

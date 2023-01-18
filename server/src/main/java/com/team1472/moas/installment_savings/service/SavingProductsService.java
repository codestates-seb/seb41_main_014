package com.team1472.moas.installment_savings.service;

import com.team1472.moas.installment_savings.dto.SavingProductRes;
import com.team1472.moas.installment_savings.dto.SavingsFilteringReq;
import com.team1472.moas.installment_savings.repository.InterestRateRepository;
import com.team1472.moas.response.MultiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class SavingProductsService {
    private final InterestRateRepository interestRateRepository;

    public MultiResponse findSavingsProducts(Pageable pageable, SavingsFilteringReq filter) {
         Page<SavingProductRes> pageSavingProduct = interestRateRepository.findFilteringSavingProducts(pageable, filter);

        List<SavingProductRes> savingProducts = pageSavingProduct.getContent();

        //세후 이자 계산
        for (SavingProductRes savingProduct : savingProducts) {
            long interestAmount = calculateInterestAmount(savingProduct, filter.getMonthlySavings());
            savingProduct.setInterestAmount(interestAmount);
        }

        return new MultiResponse(savingProducts, pageSavingProduct);
    }

    //세후 이자 금액 계산
    private long calculateInterestAmount(SavingProductRes savingProduct, long money) {
        long pretaxInterest; //세전 이자
        int period = Integer.parseInt(savingProduct.getSaveTrm()); //총 월 납입 기간

        if (savingProduct.getIntrRateType().equals("S")) { //단리 계산
            pretaxInterest =  calculateSimpleInterest(money, savingProduct.getIntrRate(), period);

        } else { //복리 계산
            pretaxInterest =  calculateCompoundInterest(money, savingProduct.getIntrRate(), period);
        }

        long tax = calculateTax(pretaxInterest); //세금 계산

        return pretaxInterest - tax;
    }

    //단리 계산
    private long calculateSimpleInterest(long money, double interest, int period) {

        return Math.round((money * interest * 0.01 * (period + 1) * period / 2) / 12);
    }

    //복리 계산
    private long calculateCompoundInterest(long money, double interest, int period) {

        return Math.round(money * (1 + interest * 0.01 / 12) * (Math.pow((1 + interest * 0.01 / 12), period) - 1) / (interest * 0.01 / 12)) - money * period;
    }

    //이자 세금 계산
    private long calculateTax(long interest) {
        double tax = interest * 0.154;
        int firstDecimalPlace = (int) (((long)(tax * 10)) % 10);

        if (firstDecimalPlace > 5) {
            return (long) (Math.floor(tax) + 1);
        }

        return (long) Math.floor(tax);
    }

}

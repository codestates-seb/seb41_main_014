package com.team1472.moas.like_savings.mapper;

import com.team1472.moas.like_savings.dto.RegisterLikeSavingProductReq;
import com.team1472.moas.like_savings.dto.RegisterLikeSavingProductRes;
import com.team1472.moas.like_savings.entity.LikeSavings;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface LikeSavingsMapper {
     LikeSavings likeSavingProductReqToLikeSavings(RegisterLikeSavingProductReq registerLikeSavingProductReq);

     default RegisterLikeSavingProductRes likeSavingsToLikeSavingsProductRes(LikeSavings likeSavings) {
          return new RegisterLikeSavingProductRes(
                  likeSavings.getId(),
                  likeSavings.getMember().getId(),
                  likeSavings.getFinPrdtCd(),
                  likeSavings.getIntrRateType(),
                  likeSavings.getRsrvType(),
                  likeSavings.getSaveTrm()
          );
     }
}

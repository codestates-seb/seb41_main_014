package com.team1472.moas.util.secret;

import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "open-api")
@Getter
@Setter
public class OpenApiAuthKey {
    private String key; //적금 조회 open api 인증 키
}

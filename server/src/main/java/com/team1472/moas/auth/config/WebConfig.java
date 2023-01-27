package com.team1472.moas.auth.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

// CORS 에러를 해결하기 위해 만들어 둔 부분, 사용 및 접근하고자 하는 링크를 등록하면 됨

@Configuration
public class WebConfig implements WebMvcConfigurer {

    private final long MAX_AGE_SECS = 3600;

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000","http://ec2-43-201-0-232.ap-northeast-2.compute.amazonaws.com/",
                        "http://gardensnake.kro.kr/", "https://gardensnake.kro.kr/",
                        "http://moas-deploy.s3-website.ap-northeast-2.amazonaws.com/","https://moas1472.kro.kr/",
                        "http://moas1472.s3-website.ap-northeast-2.amazonaws.com/")
                .allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS")
                .allowedHeaders("*")
                .allowCredentials(true)
                .exposedHeaders("Authorization", "RefreshToken")
                .maxAge(MAX_AGE_SECS);
    }
}

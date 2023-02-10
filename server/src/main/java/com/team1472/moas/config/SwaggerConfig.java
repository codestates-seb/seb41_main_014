package com.team1472.moas.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import org.springdoc.core.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {
    @Bean
    public GroupedOpenApi publicApi() {
        return GroupedOpenApi.builder()
                .group("v1-definition")
                .pathsToMatch("/api/**")
                .build();
    }
    @Bean
    public OpenAPI moasOpenAPI() {
        return new OpenAPI()
                .info(new Info().title("MOAS API")
                        .description("MOAS 프로젝트 API 명세서입니다.")
                        .version("v1.0"));
    }
}

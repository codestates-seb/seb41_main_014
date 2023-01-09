package com.team1472.moas;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class MoasApplication {

    public static void main(String[] args) {
        SpringApplication.run(MoasApplication.class, args);
    }

}

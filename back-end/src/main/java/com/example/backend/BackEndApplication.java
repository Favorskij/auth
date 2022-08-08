package com.example.backend;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackEndApplication {


    public static void main(String[] args) {
        SpringApplication.run(BackEndApplication.class, args);
    }

    @Bean
    CommandLineRunner init(UserRepository serviceJpa) {

        return args -> {
            serviceJpa.save(new User(1L, "user1", "1111"));
            serviceJpa.save(new User(2L, "user2", "1111"));
            serviceJpa.save(new User(3L,"user3", "1111"));
        };
    }

}
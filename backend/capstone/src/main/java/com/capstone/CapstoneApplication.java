package com.capstone;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import javafx.application.Application;

@SpringBootApplication
public class CapstoneApplication extends SpringBootServletInitializer {

	 @Override
	  protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
	    return builder.sources(Application.class);
	  }


	public static void main(String[] args) {
		SpringApplication.run(CapstoneApplication.class, args);
	}

}

package de.tomahawk;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan({"de.tomahawk.controller"})
public class DayumApplication {

	public static void main(String[] args) {
		SpringApplication.run(DayumApplication.class, args);
	}
}

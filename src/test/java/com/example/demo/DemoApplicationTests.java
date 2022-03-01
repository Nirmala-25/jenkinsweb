package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
public class DemoApplicationTests {

	@GetMapping(path = "/hello")
	public String hello(){
		return "Hello na Public !!";
	}

}

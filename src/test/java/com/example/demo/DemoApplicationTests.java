package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
public class book {

	public static void main(String[] args)
	{
		SpringApplication.run(book.class, args);
		System.out.println("Hello na public")
	}

}
@RestController 
public class HelloController { 

@RequestMapping("/hello")  
public String hello() {   
 return "Hello, world"; 
 }}

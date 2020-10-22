package com.capstone.controller;

import java.net.URI;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.dao.UserDao;
import com.capstone.model.Member;

@RestController
@CrossOrigin
public class RegisterController {
	
	@Autowired
	UserDao userDao;
	
	@PostMapping("/register")
	public ResponseEntity<Member> createUser(@RequestBody Member user ) {
		userDao.saveUser(user);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(user.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
}

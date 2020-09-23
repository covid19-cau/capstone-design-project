package com.capstone.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.capstone.model.User;
import com.capstone.repository.UsersRepository;

@Controller
public class UserController {

	@Autowired
	UsersRepository userRepo;
	
	
	@GetMapping("/main/find")
	@ResponseBody
	public Optional<User> findData() {
		
		
		return userRepo.findById("");
		
	}
	
	@GetMapping("/user/add")
	@ResponseBody
	public void addUserData() {
		User user1 = new User();
		user1.setEmail(null);
		user1.setId(null);
		userRepo.save(user1);
	}

}

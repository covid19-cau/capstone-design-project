package com.capstone.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.dao.UserDao;
import com.capstone.model.Challenge;
import com.capstone.service.AuthenticationService;
import com.capstone.service.RecommendSet;
import com.capstone.service.UserService;

@RestController
@CrossOrigin()
public class UserServiceController {
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	AuthenticationService authenticationService;
	
	@Autowired
	UserService userService;
	
	@GetMapping("/login") // userSingIn() in authenticationService
	public boolean signInUser(@RequestParam("id") String id, @RequestParam("password") String password) {
		return authenticationService.userSignIn(id, password);
	}
	
	@GetMapping("/user/{id}/challenge")
	public Challenge getChallengeInfo (@PathVariable int id) {
		return userService.getChallengeInfo(id);
	}
	
	@GetMapping("/user/{id}")
	public RecommendSet getRecommendContents (@PathVariable int id) {
		return userService.getRecommendSet(id);
	}
	
	@PostMapping("/user/{id}/challenge/register")
	public void setNewChallenge(@PathVariable int id, @RequestBody Challenge challenge) {
		userService.setChallenge(id,challenge);
	}
}

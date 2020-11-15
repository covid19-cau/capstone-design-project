package com.capstone.controller;

import java.text.ParseException;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.config.JwtTokenProvider;
import com.capstone.dao.UserDao;
import com.capstone.model.Challenge;
import com.capstone.model.Member;
import com.capstone.model.Token;
import com.capstone.service.CustomUserDetailService;
import com.capstone.service.UserService;

@RestController
@CrossOrigin()
public class UserServiceController {
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	CustomUserDetailService authenticationService;
	
	@Autowired
	UserService userService;
	
	@Autowired
	JwtTokenProvider jwtTokenProvider;
	
	
	@GetMapping("/user/challengeList/{member_id}")
	public Challenge getChallengeInfo (@PathVariable int member_id, @RequestBody String date) {
		if(!userService.hasChallenge(member_id)) {
			throw new ContentsNotFoundException("No Challenge");
		}
		return userService.getChallengeByMemberId(member_id);
	}
	
	
	@GetMapping("/user/myInfo")
	public EntityModel<Member> retrieveMember(@RequestBody Token token) {
		
		String name = jwtTokenProvider.getUserPk(token.getToken());
		Member member = userDao.findByName(name);			
		if(member == null) {
			throw new UserNotFoundException("Invalid user");
		}
		EntityModel<Member> model = new EntityModel<>(member);
		
		return model;
	}
	
	@PostMapping("/user/applychallenge/{user_id}")
	public Challenge registerChallenge(@PathVariable int member_id, @RequestBody Challenge challenge){	
		userService.setChallenge(member_id,challenge);
		return userService.getChallengeByMemberId(member_id);
	}
	
	@PostMapping("/user/checkchallenge/{challenge_id}")
	public Challenge checkChallenge(@PathVariable int challenge_id, @RequestBody String checkDay) throws ParseException {
		Challenge challenge = userService.getChallengeById(challenge_id);
		userService.updateCheckDay(challenge_id, checkDay);
		
		return userService.getChallengeById(challenge_id);
	}
	
}

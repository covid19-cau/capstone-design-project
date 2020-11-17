package com.capstone.controller;

import java.text.ParseException;

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
import com.capstone.exception.NotCheckDayException;
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
	
	@PostMapping("/user/applychallenge/{member_id}")
	public Challenge registerChallenge(@PathVariable int member_id, @RequestBody Challenge challenge){	
		userService.setChallenge(member_id,challenge);
		return userService.getChallengeByMemberId(member_id);
	}
	
	@PostMapping("/user/checkchallenge/{member_id}")
	public Challenge checkChallenge(@PathVariable int member_id, @RequestBody String checkDay) throws ParseException {
		int challenge_id = userService.getChallengeByMemberId(member_id).getId();
		if(!userService.updateCheckDay(challenge_id, checkDay))
			throw new NotCheckDayException("Not your challenge check day.");
		
		return userService.getChallengeById(challenge_id);
	}
	
}

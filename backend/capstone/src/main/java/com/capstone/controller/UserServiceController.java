package com.capstone.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.config.JwtTokenProvider;
import com.capstone.dao.ChallengeDao;
import com.capstone.dao.UserDao;
import com.capstone.exception.NotCheckDayException;
import com.capstone.model.Challenge;
import com.capstone.model.Equipment;
import com.capstone.model.Meal;
import com.capstone.model.Member;
import com.capstone.model.Token;
import com.capstone.model.Video;
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
	
	//추천컨텐츠
	
	@GetMapping("/user/{member_id}/video")
	public List<Video> getVideoContents (@PathVariable int member_id) {
		return userService.getVideoById(member_id);
	}
	
	@GetMapping("/user/{member_id}/equipment")
	public List<Equipment> getEquipmentContents (@PathVariable int member_id) {
		return userService.getEquipmentById(member_id);
	}
	
	@GetMapping("/user/{member_id}/meal")
	public List<Meal> getMealContents (@PathVariable int member_id) {
		return userService.getMealById(member_id);
	}
	
	@GetMapping("/user/challengeList/{member_id}")
	public Challenge getChallengeInfo (@PathVariable int member_id) {
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
	public Challenge checkChallenge(@PathVariable int member_id, @RequestBody String date) throws ParseException {
		int challenge_id = userService.getChallengeByMemberId(member_id).getId();
		if(!userService.updateCheckDay(challenge_id, date))
			throw new NotCheckDayException("Not your challenge check day.");
		
		return userService.getChallengeById(challenge_id);
	}

	@GetMapping("/user/getotherchallenge/{member_id}")
	public List<Challenge> getOtherMemberChallenge(@PathVariable int member_id) {
		return userService.getAllChallengeByGoal(userDao.findByID(member_id).getGoal());
	}
	
	@Autowired
	ChallengeDao challengeDao;
	@GetMapping("/user/challenge/{challenge_id}")
	public Challenge getChallenge(@PathVariable int challenge_id) {
		return challengeDao.findChallengeById(challenge_id); 
	}
}

package com.capstone.controller;

import java.net.URI;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.config.JwtTokenProvider;
import com.capstone.dao.ChallengeDao;
import com.capstone.dao.UserDao;
import com.capstone.model.Challenge;
import com.capstone.model.Member;
import com.capstone.model.Token;

@RestController
@CrossOrigin()
public class RegisterController {
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	ChallengeDao challengeDao;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	JwtTokenProvider jwtTokenProvider;
	    
	@PostMapping("/signup")
	public ResponseEntity<Member> createUser(@RequestBody Member user ) {
		try {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			user.setRoles(Collections.singletonList("ROLE_USER")); //Produce USER
			userDao.saveUser(user);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(user.getId()).toUri();
			return ResponseEntity.created(location).build();
		}catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@PostMapping("/login")
    public Map<String,Object> login(@RequestBody Map<String,Object> loginSet) {
        Member member = userDao.findByName((String)loginSet.get("name"));
        Map<String,Object> result = new HashMap<String,Object>();
        Date date = new Date();
        Challenge challenge = new Challenge();
        if(member == null)
        	throw new IllegalArgumentException("There is unvalid id.");
        	
        if (!passwordEncoder.matches((String)loginSet.get("password"), member.getPassword())) {
            throw new IllegalArgumentException("There is unvalid password.");
        }
        if(member.getLastLogin() == null)
        	member.setLastLogin(date);
        if(member.getChallengeId() != null) {
            challenge = challengeDao.findChallengeById(member.getChallengeId());
            if(member.getLastLogin().getDate() != date.getDate() ) {
            	challenge.setTodayCheck(false);	
            }
            member.setLastLogin(date);
            userDao.saveUser(member);
        	challengeDao.savechallenge(challenge);
        }  
    	result.put("token", jwtTokenProvider.createToken(member.getName(), member.getRoles()));
        result.put("id", member.getId());
        return result;
	}
	
	@PostMapping("/logoutPlease")
	public ResponseEntity<Member> logoutUser(@RequestBody Token token){
		if(!jwtTokenProvider.validateToken(token.getToken()))
			throw new IllegalArgumentException("There is unvalid user");
		try {
			if(jwtTokenProvider.validateToken(token.getToken())) {
				jwtTokenProvider.logoutToken(token.getToken());
			}
			return ResponseEntity.ok().build();
		} catch(Exception ex) {
			return ResponseEntity.notFound().build();
		}
	}
}

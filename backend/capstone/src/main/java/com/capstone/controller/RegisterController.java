package com.capstone.controller;

import java.net.URI;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.config.JwtTokenProvider;
import com.capstone.dao.UserDao;
import com.capstone.model.Member;
import com.capstone.model.MemberRole;

@RestController
@CrossOrigin()
public class RegisterController {
	
	@Autowired
	UserDao userDao;
	
	@Autowired
	PasswordEncoder passwordEncoder;
	
	@Autowired
	JwtTokenProvider jwtTokenProvider;
	    
	@PostMapping("/signup")
	public ResponseEntity<Member> createUser(@RequestBody Member user ) {
		try {
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			user.setRoles(Collections.singletonList("ROLE_ADMIN"));
			userDao.saveUser(user);
			URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
					.buildAndExpand(user.getId()).toUri();
			return ResponseEntity.created(location).build();
		}catch(Exception ex) {
			return ResponseEntity.badRequest().build();
		}
	}
	
	@PostMapping("/login")
    public String login(@RequestParam("id") String id, @RequestParam("password") String password) {
        Member member = userDao.findByName(id);
        if(member == null)
        	throw new IllegalArgumentException("There is not valid id");
        	
        if (!passwordEncoder.matches(password, member.getPassword())) {
            throw new IllegalArgumentException("잘못된 비밀번호입니다.");
        }
        return jwtTokenProvider.createToken(member.getName(), member.getRoles());
    }
	
}

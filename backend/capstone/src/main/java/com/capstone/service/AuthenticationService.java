package com.capstone.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.dao.UserDao;
import com.capstone.model.Member;

@Component
public class AuthenticationService {
	
	@Autowired
	UserDao userDao;
	
	public boolean userSignIn (String name,String password) {
		List<Member> memberList = userDao.findAllUser(); 
		for(Member i : memberList) {
			if(i.getName().equals(name))
				if(i.getPassword().equals(password))
					return true;	//user exist
		}
		return false;	//user none
	}
	
}

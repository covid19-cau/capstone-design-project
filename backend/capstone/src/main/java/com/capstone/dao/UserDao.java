package com.capstone.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.Member;
import com.capstone.repository.MemberRepository;

@Component
public class UserDao {

	@Autowired
	private MemberRepository userRepo;
	
	ArrayList<Member> userList = new ArrayList<Member>();
	
	public UserDao() {
		
	}
	
	public List<Member> findAllUser(){
		return userRepo.findAll();
	}
	
	public Member findByID(String ID) {
		return null;
	}

	public boolean deleteUser(String ID) {
		return false;
	}

	public void replaceUser(String id, Member user) {
		// TODO Auto-generated method stub
		
	}
}

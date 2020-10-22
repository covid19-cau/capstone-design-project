package com.capstone.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.Member;
import com.capstone.repository.MemberRepository;

@Component
public class UserDao {

	@Autowired
	private MemberRepository userRepo;
		
	
	public List<Member> findAllUser(){
		return userRepo.findAll();
	}
	
	public Member findByID(int id) {
		Optional<Member> user = userRepo.findById(id);
		return user.get();
	}

	public boolean deleteUser(int id) {
		if(!userRepo.existsById(id)) {
			return false;
		}
		userRepo.deleteById(id);
		return true;
	}

	public boolean replaceUser(int id, Member user) {
		// TODO Auto-generated method stub
		if(!userRepo.existsById(id)) {
			return false;
		}
		userRepo.deleteById(id);
		userRepo.save(user);
		return true;
	}
	
	public void saveUser(Member user) {
		userRepo.save(user);
	}
}
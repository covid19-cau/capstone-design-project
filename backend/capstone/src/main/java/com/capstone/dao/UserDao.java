package com.capstone.dao;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.User;
import com.capstone.repository.UsersRepository;

@Component
public class UserDao {

	@Autowired
	private UsersRepository userRepo;
	
	ArrayList<User> userList = new ArrayList<User>();
	
	public UserDao() {
		userList.add(new User("s1234","kimguenwoo","slalek152@naver.com","qwer123",2,"+10kg healthtraining"));
	}
	
	public List<User> findAllUser(){
		return userRepo.findAll();
	}
	
	public User findByID(String ID) {
		return null;
	}

	public boolean deleteUser(String ID) {
		return false;
	}

	public void replaceUser(String id, User user) {
		// TODO Auto-generated method stub
		
	}
}

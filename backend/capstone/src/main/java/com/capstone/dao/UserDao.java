package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.User;
import com.capstone.repository.UsersRepository;

@Component
public class UserDao {

	@Autowired
	private UsersRepository userRepo;
	
	public List<User> findAllUser(){
		return null;
	}
	
	public User findByID(String ID) {
		return null;
	}

	public boolean deleteUser(String ID) {
		return false;
	}
	
	public boolean saveUser(User user) {
		return false;
	}
}

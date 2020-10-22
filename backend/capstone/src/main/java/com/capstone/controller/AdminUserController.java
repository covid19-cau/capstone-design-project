package com.capstone.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.dao.UserDao;
import com.capstone.model.Member;

@CrossOrigin()
@RestController
public class AdminUserController {
	@Autowired
	private UserDao userDao; 
	
	
	@GetMapping("admin/user/{id}")
	@ResponseBody
	public Member findUserData(@RequestParam int id) {
		Member one = userDao.findByID(id);
		if(one == null) {
			throw new UserNotFoundException(String.format("User [%s] not found", id));
		}
		return one;
	}
	
	@GetMapping("admin/user")
	public List<Member> retrieveAllUser(){
		List<Member> user = userDao.findAllUser();
		if(user == null) {
//			user.add(new Member("h","e","l","l",3,"o"));
			return user;
		}
		return userDao.findAllUser();
	}

	@PutMapping("admin/user/modify/{id}")
	public void modifyUserData(@PathVariable int id, @RequestBody Member user) {
		userDao.replaceUser(id,user);
	}
	
	@DeleteMapping("admin/user/delete/{id}")
	public void deleteUserData(@PathVariable int id) {
		userDao.deleteUser(id);
	}

}
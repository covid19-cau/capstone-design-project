package com.capstone.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.http.ResponseEntity.BodyBuilder;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.dao.UserDao;
import com.capstone.model.User;
import com.sun.jndi.toolkit.url.Uri;

@RestController
public class UserController {

	@Autowired
	private UserDao userDao; 
	
	
	@GetMapping("/user/{id}")
	@ResponseBody
	public User findUserData(@RequestParam String id) {
		User one = userDao.findByID(id);
		if(one == null) {
			throw new UserNotFoundException(String.format("ID[%s] not found", id));
		}
		
		return one;
	} 
	
	@GetMapping("/user")
	public List<User> retrieveAllUser(){
		return userDao.findAllUser();
	}
	
	@PostMapping("/user/add")
	public ResponseEntity<User> addUserData(@RequestBody User user) {
		userDao.saveUser(user);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(user.getId()).toUri();
		return ResponseEntity.created(location).build();
	
	}
	
	@DeleteMapping("/user/delete/{id}")
	public void deleteUserData(@RequestParam String id) {
		userDao.deleteUser(id);
	}

}

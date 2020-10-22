package com.capstone.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.dao.UserDao;
import com.capstone.model.Challenge;
import com.capstone.model.Member;

@Component
public class UserService {

	@Autowired
	UserDao userDao;
	
	Member user;
	public Challenge getChallengeInfo(int id) {
		return null;
	}

	public RecommendSet getRecommendSet(int id) {
		// TODO Auto-generated method stub
		user = userDao.findByID(id);
		RecommendSet rSet = new RecommendSet(user);
		return rSet;
	}

	public void setChallenge(int id, Challenge challenge) {
		// TODO Auto-generated method stub
		user.setChallenge(challenge);
	}
	
	public void updateChallenge(int id, Challenge challege) {
		//update challenge without id number
	}
}

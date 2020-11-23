package com.capstone.dao;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.controller.ContentsNotFoundException;
import com.capstone.model.Challenge;
import com.capstone.repository.ChallengeRepository;

@Component
public class ChallengeDao {
	@Autowired
	private ChallengeRepository challengeRepo;
	
	public List<Challenge> findAllChallenge(){
		return challengeRepo.findAll();
	}
	
	public void deletechallenge(int id) {
		if(!challengeRepo.existsById(id))
			throw new ContentsNotFoundException(String.format("challenge ID [%d] is not found", id));
		challengeRepo.deleteById(id);
	}
	
	public  void savechallenge(Challenge challenge) {
		challengeRepo.save(challenge);
	}
	
	public Challenge findChallengeById(int challenge_id) {
		Challenge challenge = challengeRepo.findById(challenge_id).get();
		return challenge;
	}
	
/*
	public void replacechallenge(int id, Challenge challenge) {
		// TODO Auto-generated method stub
		if(!challengeRepo.existsById(id))
			throw new ContentsNotFoundException(String.format("challenge ID [%d] is not found", id));
		Challenge target = challengeRepo.getOne(id);
		target.update(challenge);
		challengeRepo.save(target);
	}
	*/
}

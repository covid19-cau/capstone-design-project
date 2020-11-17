package com.capstone.service;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.dao.ChallengeDao;
import com.capstone.dao.UserDao;
import com.capstone.model.Challenge;
import com.capstone.model.Member;

import lombok.RequiredArgsConstructor;

@Component
@RequiredArgsConstructor
public class UserService {

	@Autowired
	UserDao userDao;
	
	@Autowired
	ChallengeDao challengeDao;
	
	Member user;
	public Challenge getChallengeByMemberId(int member_id) {
		Member member = userDao.findByID(member_id);
		if(challengeDao.findChallengeById(member.getChallengeId()) == null)
			return null;
		return challengeDao.findChallengeById(member.getChallengeId());
	}
	

	public RecommendSet getRecommendSet(int id) {
		// TODO Auto-generated method stub
		user = userDao.findByID(id);
		RecommendSet rSet = new RecommendSet(user);
		return rSet;
	}

	public void setChallenge(int member_id, Challenge challenge) {
		//setting remain day number
		
		
		challengeDao.savechallenge(challenge);
		Member member = userDao.findByID(member_id);
		member.setChallengeId(challenge.getId());
		userDao.saveUser(member);
		// TODO Auto-generated method stub
		//user.setChallenge(challenge);
	}
	
	public boolean updateCheckDay(int challenge_id, String date) throws ParseException {
		
		Challenge challenge = challengeDao.findChallengeById(challenge_id);
		
		if(!challenge.isCheckDay()) {
	    	return false;
	    }
		int plusPercent = daysTrain(challenge.getStartDate(),challenge.getEndDate(), challenge.getCheckDate());
		challenge.setPercent(challenge.getPercent()+100/plusPercent);
	    return true;
	}

	public boolean hasChallenge(int member_id) {
		// TODO Auto-generated method stub
		if(userDao.findByID(member_id).getChallengeId() == null) {
			return false;
		}
		return true;
	}

	public Challenge getChallengeById(int challenge_id) {
		// TODO Auto-generated method stub
		if(challengeDao.findChallengeById(challenge_id) == null) {
			return null;
		}
		return challengeDao.findChallengeById(challenge_id);
	}
	
	  private static boolean isTrainDay(Calendar cal, Integer[] trainDay) {
           int dayOfWeek = cal.get(Calendar.DAY_OF_WEEK);
           for(int i =0; i<trainDay.length;i++) {
        	   if(dayOfWeek == trainDay[i])
        		   return true;
           }
           return false;
	  }
	  
	  private static int daysBetween(Date d1, Date d2){
          return (int)( (d2.getTime() - d1.getTime()) / (1000 * 60 * 60 * 24));
	  }
	  
	  private static int daysTrain(Date startDate, Date endDate, Integer[] trainDay) {
		  Date nDate = startDate;
		  int numberOfDaysCount = 0;
		  Calendar cal = Calendar.getInstance();
		  cal.setTime(nDate);
		  for(int i=0;i<=daysBetween(startDate,endDate) ; i++ ) {
	            if(isTrainDay(cal, trainDay))
	                numberOfDaysCount++;
	            cal.add(Calendar.MONTH, 1); // add one day
	        }
		  return numberOfDaysCount;
	  }
}

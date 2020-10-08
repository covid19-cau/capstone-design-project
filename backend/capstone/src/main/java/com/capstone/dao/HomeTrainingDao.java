package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.Equipment;
import com.capstone.model.HomeTraining;
import com.capstone.model.Meal;
import com.capstone.repository.HomeTrainingRepository;

@Component
public class HomeTrainingDao {
	
	@Autowired
	private HomeTrainingRepository homeTrainingRepo;
	
	public List<HomeTraining> findAllHomeTraining(){
		return null;
	}
	
	public boolean deleteHomeTraining(String title) {
		return false;
	}
	
	public boolean saveHomeTraining(HomeTraining ht) {
		return false;
	}

	public void replaceHomeTraining(String id, HomeTraining ht) {
		// TODO Auto-generated method stub
		
	}

	public void replaceMeal(String id, Meal meal) {
		// TODO Auto-generated method stub
		
	}

	public void replaceEquipment(String id, Equipment equipment) {
		// TODO Auto-generated method stub
		
	}
}

package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.Meal;
import com.capstone.repository.MealRepository;

@Component
public class MealDao {

	@Autowired
	private MealRepository mealRepo;
	
	
	public List<Meal> findAllMeal(){
		return mealRepo.findAll();
	}
	
	public boolean deleteMeal(String title) {
		return false;
	}
	
	public boolean saveMeal(Meal meal) {
		return false;
	}

	public void replaceMeal(String id, Meal meal) {
		// TODO Auto-generated method stub
		
	}

	public Meal findByID(String id) {
		// TODO Auto-generated method stub
		return null;
	}
}

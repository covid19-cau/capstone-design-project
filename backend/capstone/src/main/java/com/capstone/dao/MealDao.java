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
		return null;
	}
	
	public boolean deleteMeal(String title) {
		return false;
	}
	
	public boolean saveMeal(Meal meal) {
		return false;
	}
}

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
	
	public boolean deleteMeal(int id) {
		
		// if no data, return false
		if(mealRepo.findById(id) == null) {
			return false;
		}
		mealRepo.deleteById(id);
		return true;
	}
	
	public void saveMeal(Meal meal) {
		mealRepo.save(meal);
	}

	public boolean replaceMeal(int id, Meal meal) {
		// TODO Auto-generated method stub
		// if no data, return false
			if(mealRepo.findById(id) == null) {
				return false;
			}
			return true;
	}

	public Meal findByID(int id) {
		// TODO Auto-generated method stub
		return null;
	}
}

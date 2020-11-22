package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.controller.ContentsNotFoundException;
import com.capstone.model.Meal;
import com.capstone.repository.MealRepository;

@Component
public class MealDao {

	@Autowired
	private MealRepository mealRepo;
	
	public List<Meal> findAllMeal(){
		return mealRepo.findAll();
	}
	
	public void deleteMeal(int id) {
		
		// if no data, return false
		if(!mealRepo.existsById(id)) {
			throw new ContentsNotFoundException(String.format("Meal ID [%d] is not found", id));
		}
		mealRepo.deleteById(id);
	}
	
	public void saveMeal(Meal meal) {
		mealRepo.save(meal);
	}

	public void replaceMeal(int id, Meal meal) {
		// TODO Auto-generated method stub
		// if no data, return false
			if(!mealRepo.existsById(id)) {
				throw new ContentsNotFoundException(String.format("Meal ID [%d] is not found", id));
			}
			Meal target = mealRepo.getOne(id);
			target.setCalory(meal.getCalory());
			target.setCarbohydrate(meal.getCarbohydrate());
			target.setFat(meal.getFat());
			target.setName(meal.getName());
			target.setProtein(meal.getProtein());
			target.setServing(meal.getServing());
			target.setGoal(meal.getGoal());
			mealRepo.save(target);
	}

}

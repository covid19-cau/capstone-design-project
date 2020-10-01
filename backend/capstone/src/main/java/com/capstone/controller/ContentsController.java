package com.capstone.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.dao.EquipmentDao;
import com.capstone.dao.HomeTrainingDao;
import com.capstone.dao.MealDao;
import com.capstone.model.Equipment;
import com.capstone.model.HomeTraining;
import com.capstone.model.Meal;
import com.capstone.model.User;

public class ContentsController {
	
	@Autowired
	private EquipmentDao equipmentDao;
	
	@Autowired
	private MealDao mealDao;
	
	@Autowired
	private HomeTrainingDao hometrainingDao;
	
	@GetMapping("/admin/hometraining")
	public List<HomeTraining> listHomeTraining(){
		return hometrainingDao.findAllHomeTraining();
	}
	
	@GetMapping("/admin/meal")
	public List<Meal> listMeal(){
		return mealDao.findAllMeal();
	}
	
	@GetMapping("/admin/equipment")
	public List<Equipment> listEquipment(){
		return equipmentDao.findAllEquipment();
	}

	@PostMapping("/admin/hometraining/add")
	public ResponseEntity<HomeTraining> addHomeTrainingData(@RequestBody HomeTraining ht) {
		hometrainingDao.saveHomeTraining(ht);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(ht.getTitle()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PostMapping("/admin/meal/add")
	public ResponseEntity<Meal> addMealData(@RequestBody Meal meal) {
		mealDao.saveMeal(meal);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(meal.getTitle()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PostMapping("/admin/equipment/add")
	public ResponseEntity<Equipment> addEquipmentData(@RequestBody Equipment equipment) {
		equipmentDao.saveEquipment(equipment);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(equipment.getTitle()).toUri();
		return ResponseEntity.created(location).build();
	}
}

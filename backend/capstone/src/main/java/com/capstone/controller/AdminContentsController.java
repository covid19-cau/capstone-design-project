package com.capstone.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import com.capstone.dao.EquipmentDao;
import com.capstone.dao.MealDao;
import com.capstone.dao.VideoDao;
import com.capstone.model.Equipment;
import com.capstone.model.Meal;
import com.capstone.model.Video;

@CrossOrigin()
@RestController
public class AdminContentsController {
	@Autowired
	private EquipmentDao equipmentDao;
	
	@Autowired
	private MealDao mealDao;
	
	@Autowired
	private VideoDao videoDao;
	
	@GetMapping("/admin/video")
	public List<Video> listHomeTraining(){
		return videoDao.findAllVideo();
	}
	
	@GetMapping("/admin/meal")
	public List<Meal> listMeal(){
		return mealDao.findAllMeal();
	}
	
	@GetMapping("/admin/equipment")
	public List<Equipment> listEquipment(){
		return equipmentDao.findAllEquipment();
	}

	@PostMapping("/admin/video/add")
	public ResponseEntity<Video> addHomeTrainingData(@RequestBody Video video) {
		videoDao.saveVideo(video);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(video.getTitle()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PostMapping("/admin/meal/add")
	public ResponseEntity<Meal> addMealData(@RequestBody Meal meal) {
		mealDao.saveMeal(meal);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(meal.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@PostMapping("/admin/equipment/add")
	public ResponseEntity<Equipment> addEquipmentData(@RequestBody Equipment equipment) {
		equipmentDao.saveEquipment(equipment);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(equipment.getId()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	@DeleteMapping("admin/video/delete/{id}")
	public void deleteHomeTrainingData(@PathVariable int id) {
		videoDao.deleteVideo(id);
	}
	
	@DeleteMapping("admin/meal/delete/{id}")
	public void deleteMealData(@PathVariable int id) {
		mealDao.deleteMeal(id);
	}
	
	@DeleteMapping("admin/equipment/delete/{id}")
	public void deleteequipmentData(@PathVariable int id) {
		equipmentDao.deleteEquipment(id);
	}
	
	@PutMapping("admin/video/modify/{id}")
	public void modifyHomeTrainingData(@PathVariable int id, @RequestBody Video video) {
		videoDao.replaceVideo(id,video);
	}
	
	@PutMapping("admin/meal/modify/{id}")
	public void modifyMealData(@PathVariable int id, @RequestBody Meal meal) {
		mealDao.replaceMeal(id,meal);
	}
	
	@PutMapping("admin/equipment/modify/{id}")
	public void modifyEquipmentData(@PathVariable int id, @RequestBody Equipment equipment) {
		equipmentDao.replaceEquipment(id,equipment);
	}
	
}

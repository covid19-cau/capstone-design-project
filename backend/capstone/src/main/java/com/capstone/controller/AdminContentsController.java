package com.capstone.controller;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.capstone.dao.EquipmentDao;
import com.capstone.dao.VideoDao;
import com.capstone.dao.MealDao;
import com.capstone.model.Equipment;
import com.capstone.model.Meal;
import com.capstone.model.Member;
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
	
	@GetMapping("/admin/hometraining")
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

	@PostMapping("/admin/hometraining/add")
	public ResponseEntity<Video> addHomeTrainingData(@RequestBody Video ht) {
		videoDao.saveVideo(ht);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
				.buildAndExpand(ht.getTitle()).toUri();
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
	
	@DeleteMapping("admin/hometraining/delete/{id}")
	public void deleteHomeTrainingData(@RequestParam String id) {
		videoDao.deleteVideo(id);
	}
	
	@DeleteMapping("admin/meal/delete/{id}")
	public void deleteMealData(@RequestParam String id) {
		mealDao.deleteMeal(id);
	}
	
	@DeleteMapping("admin/equipment/delete/{id}")
	public void deleteequipmentData(@RequestParam String id) {
		equipmentDao.deleteEquipment(id);
	}
	
	@PutMapping("admin/hometraining/modify/{id}")
	public void modifyHomeTrainingData(@RequestParam String id, @RequestBody Video ht) {
		Video one = videoDao.findByID(id);
		if(one == null) {
			throw new ContentsNotFoundException(String.format("ID[%s] HomeTraining info not found", id));
		}
		videoDao.replaceVideo(id,ht);
	}
	
	@PutMapping("admin/meal/modify/{id}")
	public void modifyMealData(@RequestParam String id, @RequestBody Meal meal) {
		Meal one = mealDao.findByID(id);
		if(one == null) {
			throw new ContentsNotFoundException(String.format("ID[%s] meal info not found", id));
		}
		mealDao.replaceMeal(id,meal);
	}
	
	@PutMapping("admin/equipment/modify/{id}")
	public void modifyEquipmentData(@RequestParam String id, @RequestBody Equipment equipment) {
		Equipment one = equipmentDao.findByID(id);
		if(one == null) {
			throw new ContentsNotFoundException(String.format("ID[%s] equipment info not found", id));
		}
		equipmentDao.replaceEquipment(id,equipment);
	}
	
}

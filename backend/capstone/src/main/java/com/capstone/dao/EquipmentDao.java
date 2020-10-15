package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.controller.ContentsNotFoundException;
import com.capstone.model.Equipment;
import com.capstone.repository.EquipmentRepository;

@Component
public class EquipmentDao {

	@Autowired
	private EquipmentRepository equipmentRepo;
	
	public List<Equipment> findAllEquipment(){
		return equipmentRepo.findAll();
	}
	
	public void deleteEquipment(int id) {
		if(!equipmentRepo.existsById(id))
			throw new ContentsNotFoundException(String.format("Equipment ID [%d] is not found", id));
		equipmentRepo.deleteById(id);
	}
	
	public  void saveEquipment(Equipment equipment) {
		equipmentRepo.save(equipment);
	}

	public void replaceEquipment(int id, Equipment equipment) {
		// TODO Auto-generated method stub
		if(!equipmentRepo.existsById(id))
			throw new ContentsNotFoundException(String.format("Equipment ID [%d] is not found", id));
		Equipment target = equipmentRepo.getOne(id);
		target.update(equipment);
		equipmentRepo.save(target);
	}

}

package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.model.Equipment;
import com.capstone.repository.EquipmentRepository;

@Component
public class EquipmentDao {

	@Autowired
	private EquipmentRepository equipmentRepo;
	
	public List<Equipment> findAllEquipment(){
		return null;
	}
	
	public boolean deleteEquipment(String title) {
		return false;
	}
	
	public boolean saveEquipment(Equipment equipment) {
		return false;
	}
}

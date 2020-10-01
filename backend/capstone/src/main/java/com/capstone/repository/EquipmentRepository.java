package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Equipment;

public interface EquipmentRepository extends JpaRepository<Equipment,String> {

}

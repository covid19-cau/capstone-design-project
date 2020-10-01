package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.capstone.model.Meal;

public interface MealRepository extends JpaRepository<Meal,String>{

}

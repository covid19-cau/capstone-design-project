package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@AllArgsConstructor
@Data
public class Meal {
	
	
	@Id
	private String id;
	
	private String name;

	private int serving_size;
	
	private int calory;
	
	private int carbohydrate;
	
	private int protein;
	
	private int fat;
	
	private int training_purpose;
}

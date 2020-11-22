package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
@Table(name = "meal", catalog = "data")
public class Meal {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private int id;
	
	@Column (nullable = false, length = 100)
	private String name;

	@Column (nullable = false, length = 10)
	private String serving;
	
	@Column (nullable = false, length = 10)
	private String calory;
	
	@Column (nullable = false, length = 10)
	private String carbohydrate;
	
	@Column (nullable = false, length = 10)
	private String protein;
	
	@Column (nullable = false, length = 10)
	private String fat;
	
	@Column (nullable = false)
	private String goal;
}

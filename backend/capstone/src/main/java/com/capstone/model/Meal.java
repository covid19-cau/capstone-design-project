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
	private String title;
	
	private String contents;
	
	private int subject;
}

package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Builder;

@Entity
public class Meal {
	
	@Builder
	public Meal(String title, String contents) {
		this.title = title;
		this.contents = contents;
	}
	
	@Id
	private int index;

	private String title;
	
	private String contents;
}

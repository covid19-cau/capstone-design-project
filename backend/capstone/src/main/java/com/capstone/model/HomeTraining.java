package com.capstone.model;

import javax.persistence.Entity;

import lombok.Builder;

@Entity
public class HomeTraining {
	
	
	@Builder
	public HomeTraining(String title,String contents) {
		// TODO Auto-generated constructor stub
		this.title =title;
		this.contents = contents;
	}

	private int index;
	
	private String title;
	
	private String contents;
}

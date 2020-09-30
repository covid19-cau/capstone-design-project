package com.capstone.model;

import javax.persistence.Entity;

import lombok.Builder;

@Entity
public class Equipment {

	@Builder
	public Equipment() {
		// TODO Auto-generated constructor stub
	}
	
	private int index;
	
	private String title;
	
	private String contents;

}

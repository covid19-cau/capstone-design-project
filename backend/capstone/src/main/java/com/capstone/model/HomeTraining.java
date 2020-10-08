package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@AllArgsConstructor
@Data
public class HomeTraining {
	
	
	@Id
	private String id;
	
	private String name;

	private String title;
	
	private String uploader;
	
	private String url;
	
	private int training_purpose;
}

package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@AllArgsConstructor
@Data
public class Equipment {
	
	@Id
	private String id;
	
	private String name;

	private int price;
	
	private String url;
	
	private int shipping_charge;
	
	private String seller;
	
	private int training_purpose;
}

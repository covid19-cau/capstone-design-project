package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
@Table(name = "equipment", catalog = "data")
public class Equipment {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private int id;
	
	@Column (nullable = false, length = 100)
	private String name;

	@Column (nullable = false, length = 15)
	private String price;
	
	@Column (nullable = false, length = 500)
	private String url;
	
	@Column (length = 15, columnDefinition = "default 'free'") //배송비 없으면 free 출
	private String shipping_charge;
	
	@Column (length = 30)
	private String seller;
	
	private String training_purpose;


	public void update(Equipment equipment) {
		name = equipment.getName();
		price = equipment.getPrice();
		url = equipment.getUrl();
		shipping_charge = equipment.getShipping_charge();
		seller = equipment.getSeller();
		training_purpose = equipment.getTraining_purpose();
	}
	
	/*
	@Column (nullable = false)
	@Enumerated(EnumType.STRING)
	private Training_Purpose training_purpose;
	
	private enum Training_Purpose{
		Weightloss,
		Muscleaugmentation,
		Bodytypecorrection
	}
	*/


}

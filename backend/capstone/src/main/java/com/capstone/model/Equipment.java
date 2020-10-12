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

@Entity
@Table(schema = "Data")
@AllArgsConstructor
@Data
public class Equipment {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private Long id;
	
	@Column (nullable = false, length = 100)
	private String name;

	@Column (nullable = false, length = 15)
	private int price;
	
	@Column (nullable = false, length = 500)
	private String url;
	
	@Column (length = 15, columnDefinition = "default 'free'") //배송비 없으면 free 출
	private String shipping_charge;
	
	@Column (length = 30)
	private String seller;
	
	@Column (nullable = false)
	@Enumerated(EnumType.STRING)
	private Training_Purpose training_purpose;
	
	private enum Training_Purpose{
		Weightloss,
		Muscleaugmentation,
		Bodytypecorrection
	}

}

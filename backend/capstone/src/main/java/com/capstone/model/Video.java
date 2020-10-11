package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.capstone.model.Equipment.Training_Purpose;

import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Table (schema = "Data")
@AllArgsConstructor
@Data
public class Video {
	
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private Long id;
	
	@Column(length = 50)
	private String name;

	@Column(length = 100)
	private String title;
	
	@Column(length = 30)
	private String uploader;
	
	@Column(length = 30)
	private String url;
	
	@Column (nullable = false)
	@Enumerated(EnumType.STRING)
	private Training_Purpose training_purpose;
	
	private enum Training_Purpose{
		Weightloss,
		Muscleaugmentation,
		Bodytypecorrection
	}
}

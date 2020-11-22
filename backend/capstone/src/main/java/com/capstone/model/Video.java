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
@Table (name = "video", catalog = "data")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Video {
	
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private int id;
	
	@Column(length = 50)
	private String name;

	@Column(length = 100)
	private String title;
	
	@Column(length = 30)
	private String uploader;
	
	@Column(length = 30)
	private String url;
	
	@Column (nullable = false)
	private String goal;
	
//	@Column (nullable = false)
//	@Enumerated(EnumType.STRING)
//	private Training_Purpose training_purpose;
//	
//	private enum Training_Purpose{
//		Weightloss,
//		Muscleaugmentation,
//		Bodytypecorrection
//	}
}

package com.capstone.model;

import java.sql.Date;

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
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "challenge", catalog = "data")
public class Challenge {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = true, nullable = false, columnDefinition = "INT(11)", unique = true)
	private int id;
	
	@Column (nullable = false)
	private int member_id;
	
	
	
	@Column (nullable = false)
	//@Enumerated(EnumType.STRING)
	private String goal;
	
	/*
	private enum Training_Purpose{
		Weightloss,
		Muscleaugmentation,
		Bodytypecorrection
	}
	*/
	
	@Column (nullable = false, length = 100)
	private String detailedGoal;
	
	
	@Column (nullable = false)
	private Date startDate;
	
	@Column (nullable = false)
	private Date endDate;
	
	@Column (nullable = true)
	private float percent = 0 ;
	
	@Column (nullable = false)
	//@Enumerated(EnumType.STRING)
	private Integer[] checkDate;
	
	private Integer remainDay;
	
	
	@Column(nullable = true)
	private boolean isCheckDay = false;
	/*
	private enum Certification_Day{
		Mon, Tue, Wed, Thu, Fri, Sat, Sun
	}
	*/

}

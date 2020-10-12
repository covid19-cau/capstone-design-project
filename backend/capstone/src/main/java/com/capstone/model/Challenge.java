package com.capstone.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Challenge {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private Long id;
	
	@Column (nullable = false)
	private Long member_id;
	
	@Column (nullable = false)
	@Enumerated(EnumType.STRING)
	private Training_Purpose training_purpose;
	
	private enum Training_Purpose{
		Weightloss,
		Muscleaugmentation,
		Bodytypecorrection
	}
	
	@Column (nullable = false, length = 100)
	private String challenge_goal;
	
	@Column (nullable = false, length = 100)
	private String training_to_do;
	
	@Column (nullable = false)
	private Date start_date;
	
	@Column (nullable = false)
	private Date end_date;
	
	@Column (nullable = false)
	@Enumerated(EnumType.STRING)
	private Certification_Day certification_day;
	
	private enum Certification_Day{
		Mon, Tue, Wed, Thu, Fri, Sat, Sun
	}
}

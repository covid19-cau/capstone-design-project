package com.capstone.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "record", catalog = "information")
public class Record {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private Long id;
	
	@Column (nullable = false)
	private Long challenge_id;
	

	
	@Column (nullable = false, length = 10)
	private String result;
	
	@Column (nullable = false, length = 100)
	private String journal;
	
}

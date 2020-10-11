package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(schema = "Information")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Member {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private Long id;
	
	@Column (nullable = false, length = 50, unique = true)
	private String email;
	
	@Column (nullable = false, length = 30)
	private String passwd;
	
	@Column (nullable = false, length = 30)
	private String name;
	
	
}

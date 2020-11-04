package com.capstone.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "member", catalog = "data")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Member {
	
	@Id
	@GeneratedValue (strategy = GenerationType.IDENTITY)
	@Column (updatable = false, nullable = false, columnDefinition = "INT(11)", unique = true)
	private int id;
	
	@Column (nullable = false, length = 50, unique = true)
	private String email;
	
	@Column (nullable = false, length = 30)
	private String name;
	
	@Column (nullable = false, length = 30)
	private String password;
	
	@OneToOne
	@JoinColumn(name = "challenge")
	private Challenge challenge;
	
}

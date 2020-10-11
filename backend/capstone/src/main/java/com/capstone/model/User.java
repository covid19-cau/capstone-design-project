package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
	
	@Id
	private String id;
	
	private String name;
	
	private String email;
	
	private String passwd;
	
	//diet =1 , muscle =2; body =3
	private int subject;
	
	private String challenge;
}

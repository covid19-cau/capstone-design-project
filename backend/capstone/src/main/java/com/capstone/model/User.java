package com.capstone.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class User {
	
	@Id
	private String id;
	
	private String email;
	
	private String passwd;
	
	//diet =1 , muscle =2; body =3
	private int subject;

	
	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	

	@Override
	public String toString() {
		return "User [id=" + id + ", email=" + email + "]";
	}
}

package com.capstone.controller;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class ContentsNotFoundException extends RuntimeException {

	public ContentsNotFoundException(String message) {
		super (message);
	}
}

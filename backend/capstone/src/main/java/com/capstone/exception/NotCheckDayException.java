package com.capstone.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.NOT_FOUND)
public class NotCheckDayException extends RuntimeException {
	
	public NotCheckDayException(String message) {
		super(message);
		// TODO Auto-generated constructor stub
	}
}

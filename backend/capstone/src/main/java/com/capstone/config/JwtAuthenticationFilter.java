package com.capstone.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.GenericFilterBean;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends GenericFilterBean {
	

	 private final JwtTokenProvider jwtTokenProvider;

	    @Override
	    public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
	        // get JWT in header
	        String token = jwtTokenProvider.resolveToken((HttpServletRequest) request);
	        // check token verification
	        if (token != null && jwtTokenProvider.validateToken(token)) {
	            // if verify, get user info from token
	            Authentication authentication = jwtTokenProvider.getAuthentication(token);
	            // Save Authentication instance in SecurityContext
	            SecurityContextHolder.getContext().setAuthentication(authentication);
	        }
	        chain.doFilter(request, response);
	    }
	    
}

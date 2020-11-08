package com.capstone.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

		@Autowired
		private final JwtTokenProvider jwtTokenProvider;

		// regiter Bean of PassswrodEncoder for encoding
	    @Bean
	    public PasswordEncoder passwordEncoder() {
	        return PasswordEncoderFactories.createDelegatingPasswordEncoder();
	    }

	    // authenticationManager Bean register
	    @Bean
	    @Override
	    public AuthenticationManager authenticationManagerBean() throws Exception {
	        return super.authenticationManagerBean();
	    }

	    @Override
	    protected void configure(HttpSecurity http) throws Exception {
	        http
	                .httpBasic().disable() //base setup unused because we use only rest api
	                .csrf().disable() // crsf security token disable
	                .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS) // not use session only token
	                .and()
	                .authorizeRequests() // use auth check
	                // .antMatchers("/admin/**").hasRole("ADMIN")
	                // .antMatchers("/user/**").hasRole("USER")
	                .anyRequest().permitAll() // other request for anybody
	                .and()
	                .addFilterBefore(new JwtAuthenticationFilter(jwtTokenProvider),
	                        UsernamePasswordAuthenticationFilter.class);
	                // put JwtAuthenticationFilter before UsernamePasswordAuthenticationFilter 

	    }
}

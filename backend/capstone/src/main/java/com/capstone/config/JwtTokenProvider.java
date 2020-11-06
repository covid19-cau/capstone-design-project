package com.capstone.config;

import java.util.Base64;
import java.util.Date;
import java.util.List;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Component
public class JwtTokenProvider { // JWT token production and verification
	private String secretKey = "dsjflkjgfomkflndgjkdjgbnkdowjdkmkfokmbflnekojdklfneklgorevnlkmdkeorkgkflngfklmvdkjfo";

    // token effective time is 30 min
    private long tokenValidTime = 30 * 60 * 1000L;
    
    private final UserDetailsService userDetailsService;

    // instance initialization, encoding secret key Base64
    @PostConstruct
    protected void init() {
       secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());


    }

    // JWT token produce
    public String createToken(String userPk, List<String> roles) {
        Claims claims = Jwts.claims().setSubject(userPk); // information unit saved in JWT payload 
        claims.put("roles", roles); // information saved (key/value)
        Date now = new Date();
        return Jwts.builder()
                .setClaims(claims) // save information
                .setIssuedAt(now) // token production date information
                .setExpiration(new Date(now.getTime() + tokenValidTime)) // set Expire Time
                .signWith(SignatureAlgorithm.HS256, secretKey)  // using security algorithm
                                                                // setting secret value in signature
                .compact();
    }

    // get authentication info at JWT token
    public Authentication getAuthentication(String token) {
        UserDetails userDetails = userDetailsService.loadUserByUsername(this.getUserPk(token));
        return new UsernamePasswordAuthenticationToken(userDetails, "", userDetails.getAuthorities());
    }

    // get user info in token
    public String getUserPk(String token) {
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
    }

    // get token value in request header "X-AUTH-TOKEN" : "TOKEN'
    public String resolveToken(HttpServletRequest request) {
        return request.getHeader("X-AUTH-TOKEN");
    }

    // check token's effectiveness and expiration date
    public boolean validateToken(String jwtToken) {
        try {
            Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(jwtToken);
            return !claims.getBody().getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }
 
}

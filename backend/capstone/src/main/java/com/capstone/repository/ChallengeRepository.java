package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.model.Challenge;

@Repository
public interface ChallengeRepository extends JpaRepository<Challenge,Integer> {

}

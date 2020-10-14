package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.model.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Integer>{

}

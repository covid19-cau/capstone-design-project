package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.model.Record;

@Repository
public interface RecordRepository extends JpaRepository<Record, Integer>{

}

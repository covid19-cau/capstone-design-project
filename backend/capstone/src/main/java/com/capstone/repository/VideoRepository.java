package com.capstone.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capstone.model.Video;

@Repository
public interface VideoRepository extends JpaRepository<Video, Integer>{

}

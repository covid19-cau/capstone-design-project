package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;


import com.capstone.model.Video;
import com.capstone.repository.VideoRepository;

@Component
public class VideoDao {
	
	@Autowired
	private VideoRepository videoRepo;
	
	public List<Video> findAllVideo(){
		return videoRepo.findAll();
	}
	
	public boolean deleteVideo(String title) {
		return false;
	}
	
	public boolean saveVideo(Video ht) {
		return false;
	}

	public void replaceVideo(String id, Video ht) {
		// TODO Auto-generated method stub
		
	}

	public Video findByID(String id) {
		// TODO Auto-generated method stub
		return null;
	}
}

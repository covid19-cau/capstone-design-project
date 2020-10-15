package com.capstone.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.capstone.controller.ContentsNotFoundException;
import com.capstone.model.Video;
import com.capstone.repository.VideoRepository;

@Component
public class VideoDao {
	
	@Autowired
	private VideoRepository videoRepo;
	
	public List<Video> findAllVideo(){
		return videoRepo.findAll();
	}
	
	public void deleteVideo(int id) {
		if(videoRepo.findById(id) == null) {
			throw new ContentsNotFoundException(String.format("Video ID [%d] is not found", id));
		}
		videoRepo.deleteById(id);
	}
	
	public void saveVideo(Video video) {
		videoRepo.save(video);
		
	}

	public void replaceVideo(int id, Video video) {
		// TODO Auto-generated method stub
		if(!videoRepo.existsById(id)) {
			throw new ContentsNotFoundException(String.format("Video ID [%d] is not found", id));
		}
		//videoRepo.deleteById(id)
		Video target = videoRepo.getOne(id);
		target.setName(video.getName());
		target.setTitle(video.getTitle());
		target.setUploader(video.getUploader());
		target.setUrl(video.getUrl());
		videoRepo.save(target);
	}

}

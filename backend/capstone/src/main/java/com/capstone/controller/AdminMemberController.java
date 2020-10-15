package com.capstone.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.hateoas.EntityModel;
import org.springframework.hateoas.server.mvc.WebMvcLinkBuilder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capstone.model.Member;
import com.capstone.repository.MemberRepository;

@RestController
@RequestMapping("/admin")
public class AdminMemberController {
	
	@Autowired
	private MemberRepository memberRepo;
	
	// http://localhost:8079/admin/member
	// 전체멤버 조회
	@GetMapping("/member")
	public List<Member> retrieveAllMember() {
		return memberRepo.findAll();	
	}
	
	// 개별멤버 조회
	// HATEOAS 적용 -> 결과에 전체멤버(retrieveAllMember) 함께 링크
	@GetMapping("/member/{id}")
	public EntityModel<Member> retrieveMember(@PathVariable Integer id) {
		Optional<Member> member = memberRepo.findById(id);			// 반환값이 옵셔널인 이유는 id가 있을 수도 있고 없을 수도 있어서
	
		if (!member.isPresent()) {
			throw new ContentsNotFoundException(String.format("ID{%s} not found"));
		}
		
		EntityModel<Member> model = new EntityModel<>(member.get());
		WebMvcLinkBuilder linkTo = WebMvcLinkBuilder.linkTo(WebMvcLinkBuilder.methodOn(this.getClass()).retrieveAllMember());
		model.add(linkTo.withRel("all-member"));
		
		return model;
	}
}

package com.biodata.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.biodata.main.entity.Bio;
import com.biodata.main.repository.Biorepo;

@RestController
@RequestMapping("/bio")
public class Biocontroller {
	@Autowired
	Biorepo biorepo;

	@GetMapping("/")
	public List<Bio> getAll() {
		return biorepo.findAll();
	}
	
	@PostMapping("/addBio")
	public String addBio(@RequestBody Bio bio) {
		biorepo.save(bio);
		return "Insert Berhasil";
	}
	
	@GetMapping("/{name}")
	public List<Bio> getAllByNamaBio(@PathVariable String name) {
		return biorepo.findByNamaBio(name);
	}
//	
//	@GetMapping("/{email}")
//	public List<Bio> getAllByEmailBio(@PathVariable String email) {
//		return biorepo.findByEmailBio(email);
//	}
//	
//	@GetMapping("/{phone}")
//	public List<Bio> getAllByPhoneBio(@PathVariable String phone) {
//		return biorepo.findByPhoneBio(phone);
//	}
//	@GetMapping("/{address}")
//	public List<Bio> getAllByAddressBio(@PathVariable String address) {
//		return biorepo.findByAddressBio(address);
//	}

	@DeleteMapping("/deletebio/{id}")
	public String deleteBio(@PathVariable String id) {
		biorepo.deleteById(Long.parseLong(id));
		return "Delete Berhasil";
	}
	
	@PutMapping("/updatebio/{id}")
	public String updateBio(@PathVariable String id, @RequestBody Bio bio) {
		bio.setId(Long.parseLong(id));
		biorepo.save(bio);
		return "Update Berhasil";
	}
}
package com.biodata.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.biodata.main.entity.Bio;

public interface Biorepo extends JpaRepository<Bio, Long>{
	@Query(value = "select * from biodata where name LIKE %?1%",nativeQuery=true)
	List<Bio> findByNamaBio(String name);
	
	@Query(value = "select * from biodata where email LIKE %?1%",nativeQuery=true)
	List<Bio> findByEmailBio(String email);
	
	@Query(value = "select * from biodata where phone LIKE %?1%",nativeQuery=true)
	List<Bio> findByPhoneBio(String phone);
	
	@Query(value = "select * from biodata where address LIKE %?1%",nativeQuery=true)
	List<Bio> findByAddressBio(String address);

}

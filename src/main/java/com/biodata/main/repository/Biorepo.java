package com.biodata.main.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.biodata.main.entity.Bio;

public interface Biorepo extends JpaRepository<Bio, Long>{
	@Query(value = "select * from biodata where name LIKE %?1%",nativeQuery=true)
	List<Bio> findByNamaBio(String name);
}

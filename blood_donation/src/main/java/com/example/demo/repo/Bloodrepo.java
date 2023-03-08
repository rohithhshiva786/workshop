package com.example.demo.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.reactsp.blooddona;

public interface Bloodrepo extends JpaRepository<blooddona,Integer>{
	
}

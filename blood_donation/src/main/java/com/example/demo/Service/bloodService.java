package com.example.demo.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.reactsp.blooddona;
import com.example.demo.repo.Bloodrepo;

@Service
public class bloodService {
@Autowired
private Bloodrepo brp;

public blooddona SaveDetails (blooddona b) {
	return brp.save(b);
	
}
public List<blooddona> getAllDetails(){
	return brp.findAll();
}
public void deleteDepartmentById(int id) {
	brp.deleteById(id);
}
public blooddona update(int id,blooddona b) {
	return brp.save(b);
}

}


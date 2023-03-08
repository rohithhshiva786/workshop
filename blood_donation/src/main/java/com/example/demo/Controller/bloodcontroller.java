package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Service.bloodService;
import com.example.demo.reactsp.blooddona;

@CrossOrigin
@RestController
public class bloodcontroller {
@Autowired
private bloodService brpser;
@GetMapping("/getinfo")

public List<blooddona> getDetails(){
	return brpser.getAllDetails();
}
@PostMapping("/addinfo")
public blooddona PostDetails(@RequestBody blooddona b) {
	return brpser.SaveDetails(b);
}
@DeleteMapping("/delete/{id}")
public String delete(@PathVariable int id ) {
	brpser.deleteDepartmentById(id);
	return "Deleted";
}
@PutMapping("/updateinfo/{id}")
public blooddona update(@PathVariable int id,@RequestBody blooddona b) {
	return brpser.update(id, b);
}


}

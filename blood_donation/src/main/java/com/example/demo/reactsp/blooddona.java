package com.example.demo.reactsp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Table(name="bloodDonation1")
@Entity
public class blooddona {
@Id
@Column(name="ID")

private int id;

@Column(name="Name")
private String Name;

@Column(name="Ph_no")
private long ph_no;

@Column(name="mail_id")
private String mail_id;

@Column(name="Gender")
private String gender;

@Column(name="medical_condition")
private String medical_condition;

@Column(name="Blood_type")
private String blood_type;

public int getId() {
	return id;
}

public void setId(int id) {
	this.id = id;
}

public String getName() {
	return Name;
}

public void setName(String name) {
	Name = name;
}

public long getPh_no() {
	return ph_no;
}

public void setPh_no(long ph_no) {
	this.ph_no = ph_no;
}

public String getMail_id() {
	return mail_id;
}

public void setMail_id(String mail_id) {
	this.mail_id = mail_id;
}

public String getGender() {
	return gender;
}

public void setGender(String gender) {
	this.gender = gender;
}

public String getMedical_condition() {
	return medical_condition;
}

public void setMedical_condition(String medical_condition) {
	this.medical_condition = medical_condition;
}

public String getBlood_type() {
	return blood_type;
}

public void setBlood_type(String blood_type) {
	this.blood_type = blood_type;
}

public blooddona(int id, String name, long ph_no, String mail_id, String gender, String medical_condition,
		String blood_type) {
	super();
	this.id = id;
	Name = name;
	this.ph_no = ph_no;
	this.mail_id = mail_id;
	this.gender = gender;
	this.medical_condition = medical_condition;
	this.blood_type = blood_type;
}

public blooddona() {
	
}



}

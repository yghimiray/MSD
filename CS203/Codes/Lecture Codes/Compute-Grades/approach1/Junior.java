package com.example.approach1;

public class Junior extends Undergrad {

	public Junior(String name) {
		super(name);
	}
	
	@Override
	public String computeGrade() {
		return super.computeGrade() + " ,now executing extra logic for Junior";
//		return "Computimg for a Junior";
	}
}

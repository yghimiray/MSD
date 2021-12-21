package com.example.approach1;

public class Senior extends Undergrad {

	public Senior(String name) {
		super(name);
	}
	
	@Override
	public String computeGrade() {
		return super.computeGrade() + " ,now executing extra logic for Senior";
//		return "Computimg for a Senior";
	}

}

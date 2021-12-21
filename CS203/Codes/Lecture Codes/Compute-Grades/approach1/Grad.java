package com.example.approach1;

public class Grad extends Student {
	
	public Grad(String name) {
		super(name);
	}

	@Override
	public String computeGrade() {
		return "Computing for a Grad";
	}

}

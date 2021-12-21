package com.example.approach2;

public class Grad extends Student {
	
	public Grad(String name) {
		super(name);
	}

	@Override
	public String computeGrade() {
		return "Computing for a Grad";
	}

}

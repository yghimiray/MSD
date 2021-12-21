package com.example.approach1;

public abstract class Undergrad extends Student {

	public Undergrad(String name) {
		super(name);
	}

	@Override
	public String computeGrade() {
		return "Computing common UnderGrad logic";
	}

}

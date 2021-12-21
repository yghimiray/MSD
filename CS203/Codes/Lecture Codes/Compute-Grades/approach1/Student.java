package com.example.approach1;

public abstract class Student {
	private String name;
	
	public Student(String name) {
		this.name = name;
	}
	
	public abstract String computeGrade();
}

package com.example.approach2;

public abstract class Student {
	private String name;
	
	public Student(String name) {
		this.name = name;
	}
	
	public abstract String computeGrade();
}

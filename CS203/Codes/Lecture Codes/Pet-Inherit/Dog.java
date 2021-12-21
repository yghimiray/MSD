package com.example.inherit;

public class Dog extends Pet {
	
	public Dog(String name) {
		super(name);
	}
	
	public String fetch() {
		return "Fetch I will";
	}

}

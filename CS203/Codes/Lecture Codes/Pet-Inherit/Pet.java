package com.example.inherit;

public class Pet {

	private String name;

	public Pet(String name) {
		this.name = name;
	}

	public String speak() {
		return "I am your cuddly little pet.";
	}
	
	public String getName() {
		return name;
	}
}

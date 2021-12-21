package com.example.inherit;

public  class  Cat extends Pet{
	
	public Cat(String name) {
		super(name);
	}
	
	@Override
	public String speak() {
		return "don't give me orders.";
	}
	
}

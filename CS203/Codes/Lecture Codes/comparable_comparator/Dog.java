package com.example.comparable_comparator;

public class Dog implements Comparable<Dog> {
	private String breed;
	private int age;
	private String petName;

	public Dog(String breed, int age, String petName) {
		super();
		this.breed = breed;
		this.age = age;
		this.petName = petName;
	}

	@Override
	public String toString() {
		return "Dog [breed=" + breed + ", age=" + age + ", petName=" + petName + "]";
	}
	
	public int getAge() {
		return this.age;
	}
	
	public String getPetName() {
		return this.petName;
	}
	
	@Override
	public int compareTo(Dog o) {
		return this.age - o.age;
	}

}

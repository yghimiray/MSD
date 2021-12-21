package com.example.equals;

public class Person {
	private String name;
	private int age;

	public Person(String name, int age) {
		this.name = name;
		this.age = age;
	}

	public Person() {
		this.name = "Unknown";
		this.age = 0;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getAge() {
		return age;
	}

	public void setAge(int age) {
		this.age = age;
	}

	@Override
	public String toString() {
		return "Person [age=" + age + "]";
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + age;
		result = prime * result + ((name == null) ? 0 : name.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object aPerson) {
		// First make sure the parameter is not null
		if (aPerson == null) {
			return false;
		}
		// Checking if type is same
		if (!(aPerson instanceof Person)) {
			return false;
		}
		// Downcasting because parameter type is Object not Person
		Person p = (Person) aPerson;
		// Based on our definition two person objects are considered equal if
		// they have same age and name, return false if both don't match
		if (!(p.age == this.age && this.name.equals(p.name))) {
			return false;
		}
		
		// if all else fails above that means two person objects are equal
		return true;
	}

}

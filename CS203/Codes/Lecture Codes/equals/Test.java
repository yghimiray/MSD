package com.example.equals;


public class Test {
	public static void main(String[] args) {
		Person p1 = new Person("Sally", 21);
		Person p2 = new Person("Sally", 21);
		
		// false because p1 and p2 refer to two different objects
		System.out.println(p1== p2);
		// true based on our equals definition inside Person class
		System.out.println(p1.equals(p2));
		
		
	}
}

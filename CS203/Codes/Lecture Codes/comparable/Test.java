package com.example.comparable;

import java.util.Arrays;

public class Test {
	public static void main(String[] args) {
		Person p1 = new Person("Sally", 21);
		Person p2 = new Person("John", 19);
		Person p3 = new Person("Sandy", 21);
		Person p4 = new Person("Randy", 17);
		System.out.println(p1.compareTo(p2));
		System.out.println(p2.compareTo(p1));
		System.out.println(p1.compareTo(p3));

		Person[] people = { p1, p2, p3, p4 };
		System.out.println(Arrays.toString(people));
		Arrays.sort(people);
		System.out.println(Arrays.toString(people));

	}
}

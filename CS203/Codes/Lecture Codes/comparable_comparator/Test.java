package com.example.comparable_comparator;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Test {
	public static void main(String[] args) {
		Dog[] dogs = { new Dog("xyz", 10, "Jacky"), 
				new Dog("xyz", 17, "Bob"), 
				new Dog("aba", 12, "Kitty") };
		
		System.out.println(Arrays.toString(dogs));
		Arrays.sort(dogs);
		System.out.println(Arrays.toString(dogs));
		
		
		List<Dog> dogsList = Arrays.asList(dogs);
		DogNameComparator comp = new DogNameComparator();
		
		Collections.sort(dogsList, comp);
		
		System.out.println(dogsList);
		

	}

}

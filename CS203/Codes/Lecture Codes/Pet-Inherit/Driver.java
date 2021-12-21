package com.example.inherit;


import java.util.Scanner;

public class Driver {
	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		
		Pet p = new Pet("Unknown");
		
		System.out.println("Plese enter pet type: D for Dog and C for cat");
		
		String type = scanner.nextLine();
		
		if("D".equalsIgnoreCase(type)) {
			p = new Dog("Puppy");
		}else if("C".equalsIgnoreCase(type)) {
			p = new Cat("Pussy");
		}
		
		System.out.println(p.getName());
	}
}

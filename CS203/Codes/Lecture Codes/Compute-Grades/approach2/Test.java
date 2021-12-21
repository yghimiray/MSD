package com.example.approach2;

public class Test {
	public static void main(String[] args) {
		Student[] students = {new Undergrad("U1"), new Grad("G2"), 
				new Undergrad("U2", 'J'), new Undergrad("U3", 'S'), new Grad("G4")};
		
		for(Student s :students) {
			System.out.println(s.computeGrade());
		}
	}
}

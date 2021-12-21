package com.example.approach1;

public class Test {
	public static void main(String[] args) {
		Student[] students = {new Junior("U1"), new Grad("G2"), 
				new Senior("U2"), new Senior("U3"), new Grad("G4")};
		
		
		for(Student s :students) {
			System.out.println(s.computeGrade());
		}
	}
}

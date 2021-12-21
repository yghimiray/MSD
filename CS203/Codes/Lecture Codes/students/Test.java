package lesson3.students;
/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 13 Sample Program: Illustrate a sample processing of 
    							Student and its subclasses

    File: Ch13TestStudents.java

*/
public class Test {

	
	public static void main(String[] args) {
		
		Student[] roster = new Student[5];
		
		roster[0] = new GraduateStudent();
		roster[1] = new UndergraduateStudent();
		roster[2] = new UndergraduateStudent();
		roster[3] = new GraduateStudent();
		roster[4] = new GraduateStudent();
		
		for (int i = 0; i < roster.length; i++) {
			roster[i].setTestScore(1, 70);
			roster[i].setTestScore(2, 70);
			roster[i].setTestScore(3, 70);			
		}
		
		for (int i = 0; i < roster.length; i++) {
			roster[i].computeCourseGrade();
		}

	}

}

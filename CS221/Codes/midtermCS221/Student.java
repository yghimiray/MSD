package midtermCS221;

import java.util.ArrayList;
import java.util.Collections;

public class Student {
	String firstName;
	String lastName;

	public Student(String firstName, String lastName) {
		this.firstName=firstName;
		this.lastName=lastName;
	}

	public String getFirstName() {
		return firstName;
	}

	
	public String getLastName() {
		return lastName;
	}

	@Override
	public String toString() {
		return firstName + "  " + lastName;
	}

	public static void main(String[] args) {
		Student stu1 = new Student("Zaineh", "Altarawneh");
		Student stu2 = new Student("Ferdinand", "Zijlstra");
		Student stu3 = new Student("Jasmine", "Jullz");
		Student stu4 = new Student("Jasmine", "Altarawneh");
		ArrayList<Student> list= new ArrayList<>();
		list.add(stu1);
		list.add(stu2);
		list.add(stu3);
		list.add(stu4);

		System.out.println(list);
		StudentComparator sc = new StudentComparator();
		Collections.sort(list,sc);
		System.out.println(list);
	}
	
}

package lesson7;

import java.io.Serializable;

public class PersonTester {
	public static void main(String[] args) {
		Person p = new Person("Redda", 25);
		System.out.println(p instanceof Serializable);
	}
}

package lesson7;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;
import java.util.Scanner;

public class SaveAndReadAsText {
	public static void main(String[] args) throws FileNotFoundException {
		Person p1;
		
		File f = new File("person.txt");
		if(f.exists()) {
			p1 = readFromFile(f);
		}else {
			p1 = new Person("Unknown", 0);
		}
		
		System.out.println(p1);
		
		writeToFile(f, new Person("Rakesh", 31));
	}
	
	private static Person readFromFile(File f) throws FileNotFoundException {
		Scanner scanner = new Scanner(f);
		String name = scanner.nextLine();
		int age = scanner.nextInt();
		scanner.close();
		Person p = new Person(name, age);
		return p;
		
	}
	
	private static void writeToFile(File f, Person p) throws FileNotFoundException {
		FileOutputStream fos = new FileOutputStream(f);
		PrintWriter writer = new PrintWriter(fos);
		writer.println(p.getName());
		writer.println(p.getAge());
		writer.close();
	}
}

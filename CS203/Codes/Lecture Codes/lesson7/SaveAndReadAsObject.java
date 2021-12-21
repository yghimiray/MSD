package lesson7;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

public class SaveAndReadAsObject {
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		Person p1;

		File f = new File("person.dat");
		if (f.exists()) {
			p1 = readFromFile(f);
		} else {
			p1 = new Person("Unknown", 0);
		}

		System.out.println(p1);

		writeToFile(f, new Person("Rakesh", 31));
	}

	private static Person readFromFile(File f) throws IOException, ClassNotFoundException {
		FileInputStream fis = new FileInputStream(f);
		ObjectInputStream objectReader = new ObjectInputStream(fis);
		Person p = (Person) objectReader.readObject();
		return p;

	}

	private static void writeToFile(File f, Person p) throws IOException {
		FileOutputStream fos = new FileOutputStream(f);
		ObjectOutputStream objectWriter = new ObjectOutputStream(fos);
		objectWriter.writeObject(p);
		objectWriter.close();
	}
}

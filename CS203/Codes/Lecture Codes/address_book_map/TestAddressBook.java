/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 10 Sample Program: A test main program for
            verifying the Step 4 AddressBook class.

    File: Step4/TestAddressBook.java
*/
package lesson4.address_book_map;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.Scanner;

class TestAddressBook {
	private static AddressBook myBook;

	public static void main(String[] args) throws IOException, ClassNotFoundException {
		initAddressBook();


		Scanner scanner = new Scanner(System.in);

		System.out.println("add, list, search, exit?");
		while (true) {
			String response = scanner.next();
			switch (response) {
			case "add":
				System.out.println("Name?");
				String name = scanner.next();
				System.out.println("Age?");
				int age = scanner.nextInt();
				myBook.add(new Person(name, age));
				System.out.println("Added successfully!");
				System.out.println("add, list, search, exit?");
				break;
			case "list":
				for (Person p : myBook.getAllEntries())
					System.out.println(p);
				System.out.println("add, list, search, exit?");
				break;
			case "exit":
				scanner.close();
				saveToFile();
				System.exit(0);
				break;
			default:
				break;
			}
		}

	}

	private static void saveToFile() throws IOException {
		File outFile = new File("objects.dat");
		FileOutputStream outFileStream = new FileOutputStream(outFile);
		ObjectOutputStream outObjectStream = new ObjectOutputStream(outFileStream);
		outObjectStream.writeObject(myBook);
		outObjectStream.close();
	}

	private static void initAddressBook() throws IOException, ClassNotFoundException {
		File inFile = new File("objects.dat");
		ObjectInputStream inObjectStream = null;
		if (inFile.exists()) {
			FileInputStream inFileStream = new FileInputStream(inFile);
			inObjectStream = new ObjectInputStream(inFileStream);
			myBook = (AddressBook) inObjectStream.readObject();
		} else {
			myBook = new AddressBook();
		}

		if (inObjectStream != null)
			inObjectStream.close();
	}

}
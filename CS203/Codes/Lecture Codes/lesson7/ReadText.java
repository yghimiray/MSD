package lesson7;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileReader;
import java.io.IOException;
import java.util.Scanner;

public class ReadText {
	public static void main(String[] args) throws IOException {
		File file = new File("C:\\Users\\rashrestha\\Desktop\\Test2\\Hello.java");
		Scanner reader = new Scanner(file);
		
		System.out.println(reader.nextLine());
		System.out.println(reader.nextLine());
		System.out.println(reader.nextLine());
		
		reader.close();
		
	}
}

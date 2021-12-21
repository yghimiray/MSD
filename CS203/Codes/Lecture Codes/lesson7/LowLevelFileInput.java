package lesson7;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Arrays;

public class LowLevelFileInput {
	public static void main(String[] args) {
		try {
			File file = new File("test.dat");
			FileInputStream in = new FileInputStream(file);


			int fileSize = (int) file.length();
			byte[] bytes = new byte[fileSize];

			in.read(bytes);

			System.out.println(Arrays.toString(bytes));

			in.close();
		} catch (FileNotFoundException ex) {
			System.out.println("File not found "+ex.getMessage());
		}catch(IOException ex) {
			System.out.println("Something went wrong. Try again!");
		}
	}
}

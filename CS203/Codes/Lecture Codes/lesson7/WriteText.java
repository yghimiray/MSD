package lesson7;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintWriter;

public class WriteText {
	public static void main(String[] args) throws IOException {
		File f = new File("my_text.txt");
		FileOutputStream fs = new FileOutputStream(f);
		PrintWriter writer = new PrintWriter(fs);
		
		
		writer.println("Hello");
		writer.println("HI");
		writer.println("true");
		writer.println("10");
		writer.println("bye");
		
		
		writer.close();
		
	}
}

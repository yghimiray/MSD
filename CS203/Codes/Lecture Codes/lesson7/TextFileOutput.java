package lesson7;

import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.PrintWriter;

public class TextFileOutput {
	public static void main(String[] args) throws FileNotFoundException   {
		File outFile = new File("MyStory.txt");
		FileOutputStream outFileStream 
				= new FileOutputStream(outFile);
		PrintWriter outStream = new PrintWriter(outFileStream);

		//write values of primitive data types to the stream
		outStream.println(1);
		outStream.println("This is my story");
		outStream.println(true);

		//output done, so close the stream
		outStream.close();

	}
}

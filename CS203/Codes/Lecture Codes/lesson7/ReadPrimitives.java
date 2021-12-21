package lesson7;

import java.io.DataInputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;

public class ReadPrimitives {
	public static void main(String[] args) throws IOException {
		File file = new File("primitives");
		FileInputStream fs = new FileInputStream(file);
		DataInputStream ds = new DataInputStream(fs);
		
		System.out.println(ds.readInt());
		System.out.println(ds.readChar());
		System.out.println(ds.readDouble());
	}
}

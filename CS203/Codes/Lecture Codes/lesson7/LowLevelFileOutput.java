package lesson7;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class LowLevelFileOutput {
	public static void main(String[] args) throws IOException {
		File out = new File("test.dat");
		
		FileOutputStream outStream = new FileOutputStream(out);
		
		byte[] bytes = {20,40,60};
		
		outStream.write(bytes);
		outStream.close();
	}
}

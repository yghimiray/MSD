package lesson7;

import java.io.DataOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;

public class WritePrimitives {
	public static void main(String[] args) throws IOException{
		File f = new File("primitives");
		FileOutputStream fs = new FileOutputStream(f);
		DataOutputStream ds = new DataOutputStream(fs);
		
		ds.writeInt(123);
		ds.writeChar('Z');
		ds.writeDouble(12.33);
	}
}

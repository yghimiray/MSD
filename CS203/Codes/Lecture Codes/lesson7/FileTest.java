package lesson7;

import java.io.File;

import javax.swing.JFileChooser;

public class FileTest {
	public static void main(String[] args) {
//		File in = new File("test.txt");
//		
//		File input2 = new File("C:\\Users\\Rakesh Shrestha\\Documents");
//		
//		if(in.exists()) {
//			System.out.println("File test.txt is in current directory.");
//		}
//		
//		if(in.isFile()) {
//			System.out.println("Yes, its a file.");
//		}
//		
//		if(!input2.isFile()) {
//			System.out.println("No, its a directory");
//			
//			String filenames[] = input2.list();
//			for(String fileName: filenames) {
//				System.out.println(fileName);
//			}
//		}

		JFileChooser chooser = new JFileChooser();
		int status = chooser.showOpenDialog(null);

		if (status == JFileChooser.APPROVE_OPTION) {
			File selectedFile = chooser.getSelectedFile();
			System.out.println(selectedFile.getName());

			File currentDir = chooser.getCurrentDirectory();
			System.out.println(currentDir.getAbsolutePath());
		}

	}
}

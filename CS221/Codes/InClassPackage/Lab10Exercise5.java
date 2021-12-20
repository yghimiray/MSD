package LabPackages;
import java.util.Scanner;

public class Lab10Exercise5 {

public static int strLength(String s) {
		if(s==null || s.equals("")) {
			return 0;
		}else {
			
			return 1+strLength(s.substring(1));
		}
	}
	
public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter a string :");
		String string = scanner.nextLine();
		int n = Lab10Exercise5.strLength(string);
		System.out.println(n);
		
		
	}
	
}

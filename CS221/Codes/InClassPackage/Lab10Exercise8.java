package LabPackages;
import java.util.Scanner;

public class Lab10Exercise8 {
	
//public static String reverseString(String s) {
//	int length=s.length();
//	String sub = s.substring(0,length-1);
//	if(length==1) {
//		return s;
//	}
//	return s.charAt(length-1)+reverseString(sub);
//	
//}

public static String reverseString(String s) {
	int length=s.length();
	String sub = s.substring(1);
	if(length==1) {
		return s;
	}
	return reverseString(sub)+s.charAt(0);
	
}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter a string :");
		String string=scanner.next();
		String reversed=Lab10Exercise8.reverseString(string);
		System.out.println(reversed);
		
	}

}

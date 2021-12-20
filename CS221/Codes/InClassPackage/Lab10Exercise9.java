package LabPackages;
import java.util.Scanner;

public class Lab10Exercise9 {

public static boolean isPalindrome(String s) {
	int length=s.length();
	s=s.toUpperCase();
	if(length==0||length==1) {
		return true;
	}
	String sub=s.substring(1,length-1);
	if(s.charAt(0)==s.charAt(length-1)) {
		return isPalindrome(sub);
	}
return false;	
}
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter a String :");
		String string = scanner.next();
		System.out.println(Lab10Exercise9.isPalindrome(string));
		
	}
	
}

package InClassPackage;
import java.util.Scanner;

public class SumDigits {
	
public static int sum(String s) {
	if(s==null|| s.isEmpty()) {
		return 0;
	}else {
		return Integer.valueOf(s.substring(0,1))+sum(s.substring(1));
	}
	
}
public static void main(String[] args) {
	Scanner scanner=new Scanner(System.in);
	System.out.println("Enter a string of numbers :");
	String string = scanner.nextLine();
	System.out.println("The Sum of its digits is :");
	System.out.println(sum(string));
}

}

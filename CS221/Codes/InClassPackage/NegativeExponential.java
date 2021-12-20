package InClassPackage;
import java.util.Scanner;

public class NegativeExponential {

public static double expo(double a, int n) {
	if(n==0) {
		return 1;
		
	}else if(n<0){
	return 1/a*expo(a,n+1);
		
	}else {
	return a*expo(a,n-1);
	}
	}

public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter a number :");
		double a= scanner.nextDouble();
		System.out.println("Enter a power :");
		int n= scanner.nextInt();
		
		double result = NegativeExponential.expo(a,n);
		System.out.println(result);
		
	}
	
}
	


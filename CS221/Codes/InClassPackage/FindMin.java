package InClassPackage;

public class FindMin {

	// min of "bcad"
public static char findMin(String s) {
	if(s.length()==1) 
		return s.charAt(0);
	
	
	String sub = s.substring(1);
	char min=findMin(sub);
	char zero = s.charAt(0);
	if(min<zero) {
		return min;
	}else {
		return zero;
	}
	
	
	}
	
	
}


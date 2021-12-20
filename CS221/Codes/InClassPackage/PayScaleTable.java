package InClassPackage;

public class PayScaleTable {


public static void main(String[] args) {
	double[][] arr = {{10.50,12.00,14.50,16.75,18.00},
					  {20.50,22.25,24.00,26.25,28.00},
					  {34.00,36.50,38.00,40.35,43.00},
					  {50.00,60.00,70.00,80.00,99.99}};
	
	System.out.println("Average for Grade................");	
	for(int r=0; r<arr.length; r++) {
		double sumGrade=0;
		double avgGrade=0;
		for(int c=0; c<arr[r].length; c++) {
			sumGrade += arr[r][c];
			avgGrade = sumGrade/arr[r].length;
			
		}
		
		System.out.println(avgGrade);
	}
	System.out.println("Average for Step................");
	for(int c=0; c<arr[0].length; c++) {
			double sumStep=0;
			double avgStep=0;
			for(int r=0; r<arr.length; r++) {
				sumStep=arr[r][c];
				avgStep=sumStep/arr[0].length;
			}

			System.out.println(avgStep);
		}
	
	
}
	
}

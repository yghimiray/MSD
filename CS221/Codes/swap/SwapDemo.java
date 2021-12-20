package swap;

public class SwapDemo {
	public static void main(String[] args) {
//		Student s1 = new Student("First");
//		Student s2 = new Student("Second");
//		
//		System.out.println(s1.getName());
//		swapObj(s1, s2);
//		System.out.println(s1.getName());
//		swapObjProp(s1, s2);
//		System.out.println(s1.getName());
		
		int x=5;
		int y = 7 ;
		swapValues(x, y);
		System.out.println(y);
		
		
		
	}

	private static void swapValues(int x, int y) {
		int temp = x;
		x = y;
		y = temp;
	}

	private static void swapObjProp(Student s1, Student s2) {
		String temp = s1.getName();
		s1.setName(s2.getName());
		s2.setName(temp);
	}

	private static void swapObj(Student s1, Student s2) {
		Student temp = s1;
		s1 = s2;
		s2 = temp;
	}
}

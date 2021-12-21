package lesson3.interface_demo;

public class Test {
	public static void main(String[] args) {
		Shape[] shapes = {new Rectangle(5, 10), new Triangle(5, 8)};
		
		for(Shape s: shapes) {
			System.out.println(s.area());
		}
	}
}

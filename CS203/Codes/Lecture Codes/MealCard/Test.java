package lesson2.lab4;

public class Test {
	public static void main(String[] args) {
		Student s1 = new Student("Bira", 123);
		MealCard m = new MealCard(s1);
		
		System.out.println(m.getPoints());
		m.deductPoints(20);
		System.out.println(m.getPoints());
		m.addPoints(50);
		System.out.println(m.getPoints());
		System.out.println(m.getStudent().getName());
		
	}
}

package lesson2.lab4;

public class MealCard {
	private int points;
	private static final int DEFAULT_POINTS = 100; 
	private Student student;

	public int getPoints() {
		return points;
	}

	public void setPoints(int points) {
		this.points = points;
	}
	
	public MealCard(Student student) {
		this(DEFAULT_POINTS, student);
	}

	public MealCard(int points, Student student) {
		super();
		this.points = points;
		this.student = student;
	}

//	public MealCard() {
//		super();
//		this.points = DEFAULT_POINTS;
//	}
	
	public void addPoints(int points) {
		this.points += points;
	}
	
	public void deductPoints(int points) {
		if(this.points >= points)
			this.points -= points;
	}

	public Student getStudent() {
		return student;
	}

	public void setStudent(Student student) {
		this.student = student;
	}
	

}

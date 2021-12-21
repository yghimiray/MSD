package hr;

public class FulltimeEmployee extends Employee {

	private double bonousPercentage;

	public FulltimeEmployee(String name, int id, double baseSalary) {
		super(name, id, baseSalary);
		this.bonousPercentage = 10;
	}

	@Override
	public double getSalary() {

		return getBaseSalary() + getBaseSalary() * bonousPercentage/100;
	}

	public void setBonous(double bonous) {
		this.bonousPercentage = bonous;
	}

}

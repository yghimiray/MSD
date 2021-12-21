package hr;

public class PartTimeEmployee extends Employee {
	private double sales;

	public PartTimeEmployee(String name, int id, double baseSalary) {
		super(name, id, baseSalary);
		this.sales = 0.0;
	}

	@Override
	public double getSalary() {
		return getBaseSalary() + calculateComission();
	}

	public void setSales(double sales) {
		this.sales = sales;
	}

	private double calculateComission() {
		if (sales >= 10000) {
			return sales * 0.03;
		} else if (sales >= 5000) {
			return sales * 0.02;
		} else {
			return sales * 0.01;
		}
	}

}

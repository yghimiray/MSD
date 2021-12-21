package hr;

import java.util.ArrayList;
import java.util.List;

public class HRApp {
	public static void main(String[] args) {
		List<Employee> employees = new ArrayList<Employee>();
		employees.add(new FulltimeEmployee("abx", 111, 1000));
		employees.add(new FulltimeEmployee("aby", 222, 2000));
		employees.add(new FulltimeEmployee("abw", 333, 3000));

		PartTimeEmployee e1 = new PartTimeEmployee("bbb", 444, 4000);
		e1.setSales(10000);
		employees.add(e1);

		PartTimeEmployee e2 = new PartTimeEmployee("bbb", 444, 4000);
		e2.setSales(5000);
		employees.add(e2);

		double totalSalary = 0;

		for (Employee e : employees) {
			totalSalary += e.getSalary();
		}

		System.out.println(totalSalary);

		totalSalary = 0;

		for (Employee e : employees) {
			if (e instanceof FulltimeEmployee) {
				totalSalary += e.getSalary();
			}
		}

		System.out.println(totalSalary);

		totalSalary = 0;
		for (Employee e : employees) {
			if (e instanceof PartTimeEmployee) {
				totalSalary += e.getSalary();
			}
		}

		System.out.println(totalSalary);
	}
}

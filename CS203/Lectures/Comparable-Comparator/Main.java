package lesson5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class Main {
	public static void main(String[] args) {
		List<Employee> employees = new ArrayList<Employee>();
		employees.add(new Employee(123, "abc", 100));
		employees.add(new Employee(567, "zzz", 200));
		employees.add(new Employee(234, "xyz", 150));
		
		System.out.println("Before default sort: ");
		System.out.println(employees);
		Collections.sort(employees);
		System.out.println("After default (based on id) sort: ");
		System.out.println(employees);
		Collections.sort(employees, new SalaryCompartor());
		System.out.println("After salary sort: ");
		System.out.println(employees);
		Collections.sort(employees, new NameComparator());
		System.out.println("After name sort: ");
		System.out.println(employees);
	}
}

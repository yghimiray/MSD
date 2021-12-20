package InClassPackage;
import java.util.*;

public class AddressBook {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Enter array size :");
		int size = scanner.nextInt();
	Person[] entries = new Person[size];
	for(int i=0; i<size; i++) {
		
		System.out.println("Enter name :");
		String name = scanner.next();
		System.out.println("Enter phone :");
		String phone = scanner.next();
		Person p=new Person(name,phone);
		entries[i]=p;
		
		
	}
	for(int i=0; i<size; i++) {
		System.out.println(entries[i].getName());
		System.out.println(entries[i].getPhone());
	}
	}
	
	
}

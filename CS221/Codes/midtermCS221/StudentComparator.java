package midtermCS221;

import java.util.Comparator;

public class StudentComparator implements Comparator<Student>{
	@Override
	public int compare(Student s1, Student s2) {
	if(s1.getFirstName().equalsIgnoreCase(s2.getFirstName())) {

		return s1.getLastName().compareTo(s2.getLastName());
	}
		return s1.getFirstName().compareTo(s2.getFirstName());
	}

}


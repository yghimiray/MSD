package scope.more;

class Bookstore {
	private static final int DEFAULT_NO_OF_EMPLOYEES = 20;
	private static final int DEFAULT_NO_OF_BOOKS = 100;
	private String id;
	private Book[] books;
	private Employee[] employees;

public	Bookstore(String theId){
		id = theId;
		books = new Book[DEFAULT_NO_OF_BOOKS];
		employees = new Employee[DEFAULT_NO_OF_EMPLOYEES];
	}
public	int getNumBooks() {
		//implement
		return 0;
	}
public	int getNumEmployees(){
		//implement
		return 0;
	}
public	boolean addNewBook(String bookId) {
		//implement
		return true;
	}
public	boolean addNewEmployee(String employeeId){
		//implement
		return true;
	}
public	boolean searchBookInStock(String searchId) {
	for (int i=0; i<books.length; i++) {
		if(books[i]!=null && books[i].getId().equals(searchId))
		return true;
	}
	
		return false;
	}
}

package scope.more;

class Bookstore {
	private static final int DEFAULT_NO_OF_EMPLOYEES = 20;
	private static final int DEFAULT_NO_OF_BOOKS = 100;
	private String id;
	private Book[] books;
	private Employee[] employees;

	Bookstore(String theId){
		id = theId;
		books = new Book[DEFAULT_NO_OF_BOOKS];
		employees = new Employee[DEFAULT_NO_OF_EMPLOYEES];
	}
	int getNumBooks() {
		//implement
		return 0;
	}
	int getNumEmployees(){
		//implement
		return 0;
	}
	boolean addNewBook(String bookId) {
		//implement
		return true;
	}
	boolean addNewEmployee(String employeeId){
		//implement
		return true;
	}
	boolean bookIsInStock(String bookId) {
		//implement
		return false;
	}
}

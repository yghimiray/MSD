package scope.more;

public class StoreDirectory {
	private Bookstore bookstore;
	private Market market;
	public StoreDirectory(String custId){
		bookstore = new Bookstore(custId);
		market = new Market();
	}

	public int getNumberOfBooks() {
		return bookstore.getNumBooks();
	}
	public int getNumberOfBookstoreEmployees() {
		//implement
		return 0;
	}
	public boolean addNewEmployee(String employeeId){
		//implement
		return true;
	}
	public boolean bookIsInStock(String bookId){
		//implement
		return true;
	}
	public boolean addNewBook(String bookId){
		//implement
		return true;
	}
	public boolean marketCarriesFoodItem(String foodItem){
		//implement
		return true;
	}
}

package InClassPackage;
import javax.management.BadAttributeValueExpException;

class Account {

	private String ownerName;
	private double balance;

	public Account() {
		ownerName = "Unassigned";
		balance = 0.0;
	}

	//amt cannot be 0 or negative
	public void add(double amt) throws IllegalArgumentException{
		if(amt<=0) {
			throw new IllegalArgumentException("Amount should be a positive number .");
		}
		balance = balance + amt;
	}

	//amt cannot be 0 or negative
	public void deduct(double amt) throws IllegalArgumentException{
		if(amt<=0) {
			throw new IllegalArgumentException("Amount should be a positive number .");
		}
		balance = balance - amt;
	}

	public double getBalance() {
		return balance;
	}

	public String getOwnerName() {
		return ownerName;
	}

	//bal cannot be negative
	public void setBalance(double bal) throws IllegalArgumentException{
		if(bal<=0) {
			throw new IllegalArgumentException("Amount should be a positive number .");
		}
		balance = bal;
	}

	public void setOwnerName(String name) {
		ownerName = name;
	}
	
	public static void main(String[] args) {
		
		Account a=new Account();
		
		try {
			a.deduct(-100);
			System.out.println(a.getBalance());
		}catch(IllegalArgumentException e){
			System.out.println(e.getMessage());
		}
	}				
}
package lesson6.assertions;

public class Account {
	private double balance;

	public double deposit(double amount) throws Exception {
		if(amount<=0) {
			throw new Exception("amount is not valid");
		}
		double oldBalance = balance;
		balance += amount;
		assert balance > oldBalance: "Balnace didn't increase after deposit";
		return balance;
	}

	public double withdraw(double amount) {
		double oldBalance = balance;
		balance -= amount;
		assert balance < oldBalance;
		return balance;
	}

	public double getBalance() {
		return balance;
	}

}

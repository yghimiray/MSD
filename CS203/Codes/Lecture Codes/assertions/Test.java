package lesson6.assertions;

public class Test {
	public static void main(String[] args){
		Account account = new Account();
		try {
		account.deposit(100);
		}catch(Exception e) {
			System.out.println(e.getMessage());
		}
		account.withdraw(50);
		System.out.println(account.getBalance());
		try {
			account.deposit(-100);
			}catch(Exception e) {
				System.out.println(e.getMessage());
			}
		System.out.println(account.getBalance());
	}
}

package lesson6.exception_chain;

public class Test {
	public static void main(String[] args) {
		A();
	}
	
	private static void D(boolean condn) throws RuntimeException{
		if(condn) {
			throw new RuntimeException();
		}
	}
	
	private static void C() {
		D(true);
	}
	
	private static void B() {
		try {
			C();
		}catch (Exception e) {
			System.out.println("Exception caught and partially handled in B");
			throw e;
		}
	}
	
	private static void A() {
		try {
			B();
		}catch(Exception e) {
			System.out.println("Exception caught and handled in A");
		}
	}
}

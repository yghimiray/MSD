package InClassPackage;
import java.util.*;

public class Fortune {
	List<String> arrList =new ArrayList<>();

	public Fortune() {
		arrList.add("You will qet 4.0 GPA this semester.");
		arrList.add("Happiness is programming.");
		arrList.add("Satisfaction follows hard work.");
		arrList.add("Patience is virtue.");
//	System.out.println(arrList.size());	
	}
	public String getFortune() {
		Random random = new Random();
		int index = random.nextInt(arrList.size()-1);
		return arrList.get(index);
	}
	
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		Fortune f = new Fortune();
					
		while(true) {
		System.out.println("Fortune? Y / N ");
		String fortune = scanner.nextLine();
			if(fortune.equals("N")) break;

			System.out.println(f.getFortune());
			}
	}
		
	}
	



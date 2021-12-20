package InClassPackage;


public class Fraction {

   private int numerator;  // the numerator of this fraction
   private int denominator; // the denominator of this fraction 

//denom cannot be 0
    public Fraction(int num, int denom) throws IllegalArgumentException{
    	setNumerator(num);
    	
    	if(denom==0) {
    		throw new IllegalArgumentException("Denominator cannot be zero.");
    	}
        setDenominator(denom);
    }
    
    //denom cannot be 0
	public void setDenominator(int denom) throws IllegalArgumentException {
		if(denom==0) {
    		throw new IllegalArgumentException("You shouldnot input Denominator value as zero.");
    	}
		denominator = denom;
    }

	public void setNumerator(int num) {
        numerator = num;
    }

    public static Fraction add(Fraction f1, Fraction f2) {
        int a, b, c, d;
        
        Fraction sumFraction;

        a = f1.getNumerator();
        b = f1.getDenominator();
        c = f2.getNumerator();
        d = f2.getDenominator();

        sumFraction = new Fraction(a*d + b*c, b*d);
      
        return sumFraction;
      
    }
    
    

    public static Fraction divide(Fraction f1, Fraction f2) {
        int a, b, c, d;

        Fraction quotient;

        a = f1.getNumerator();
        b = f1.getDenominator();
        c = f2.getNumerator();
        d = f2.getDenominator();

        quotient = new Fraction(a*d, b*c);

        return quotient;
    }

	public int getDenominator( ) {
		return denominator;
	}

	public int getNumerator( ) {
		return numerator;
	}
	public String toString() {
		return getNumerator()+"/"+getDenominator();
	}
	
	public static void main(String[] args) {
		int a=1;
		int b=2;
		int c=3;
		int d=6;
		
		
		try {
			Fraction f1 = new Fraction(a,b);
			Fraction f2 = new Fraction(c,d);
			
			Fraction sum= Fraction.add(f1,f2);
			System.out.println(sum.toString());
	//		f2.setDenominator(0);
		}catch(IllegalArgumentException e){
			System.out.println(e.getMessage());
		}
				
		
		
	}
	
}

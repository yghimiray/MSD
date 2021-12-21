/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 13 Sample Program

    File: Ch13TestCatAndDog.java

*/
package lesson3.pets;

public class Test {

    
    public static void main(String[] args) {
        
        Cat myCat = new Cat( );
        myCat.setName("Puff Puff");

        System.out.println(myCat.getName( ) + " says: ");
        System.out.println(myCat.speak( ));
        
        
        Dog myDog = new Dog( );
        myDog.setName("Fifi");

        System.out.println(myDog.getName( ) + " says: ");
        System.out.println(myDog.speak( ));
        System.out.println(myDog.fetch( ));
        
        Pet p;

        p = new Dog( );
        //System.out.println(p.fetch( )); //NOT VALID
        
        System.out.println(((Dog)p).fetch( )); //VALID; need to typecast
    }
}

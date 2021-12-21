/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 13 Sample Program

    File: Pet.java

*/
package lesson3.pets;

public class Pet {
    
    private String name;

    public String getName( ) {
        return name;
    }

    public void setName(String petName) {
        name = petName;
    }

    public String speak( ) {
        return "I'm your cuddly little pet.";
    }
}

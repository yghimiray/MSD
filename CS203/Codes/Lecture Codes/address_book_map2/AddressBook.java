/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 10 Sample Program: Address Book Maintenance (Step 4)

    File: Step4/AddressBook.java
*/
package lesson4.address_book_map2;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * This class is designed to manage an address book that contains
 * Person objects. The user can specify the size of the address book
 * when it is created. If no size is specified, then the default size
 * is set to 25 Person objects.
 *
 */
class AddressBook  {    //Step 4: Implement the delete method


    private Map<String, Person>   entry;


    public AddressBook( ) {
    	entry = new HashMap<String, Person>();
    }

    public void add( Person newPerson ) {
    	entry.put(newPerson.getName(), newPerson);
    }

    public boolean delete( String searchName )
    {
    	if(entry.containsKey(searchName)) {
    		entry.remove(searchName);
    		return true;
    	}
    	return false;
    }


    public Person search( String searchName ) {
    	return entry.get(searchName);
    }
}

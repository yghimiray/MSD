/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 10 Sample Program: Address Book Maintenance (Step 4)

    File: Step4/AddressBook.java
*/
package lesson4.address_book_map;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

/**
 * This class is designed to manage an address book that contains
 * Person objects. The user can specify the size of the address book
 * when it is created. If no size is specified, then the default size
 * is set to 25 Person objects.
 *
 */
class AddressBook implements Serializable  {    //Step 4: Implement the delete method


//--------------------------------
//    Data Members
//--------------------------------


    /**
     * Constant for signaling an unsuccessful search
     */
    private static final int  NOT_FOUND    = -1;

    /**
     * The array of Person objects
     */
    private Map<String,Person>   entry;

//--------------------------------
//    Constructors
//--------------------------------


    public AddressBook( ) {
    	entry = new HashMap<String, Person>();
    }




//-------------------------------------------------
//      Public Methods:
//
//          void    add       (   Person     )
//          void    delete    (   String     )
//          Person  search    (   String     )
//
//------------------------------------------------

    /**
     * Adds a new Person to this address book.
     * If the overflow occurs, the array size
     * is increased by 50 percent.
     *
     * @param newPerson a new Person object to add
     */
    public void add( Person newPerson ) {
    	entry.put(newPerson.getName(),newPerson);
    }


    /**
     * Deletes the Person whose name is 'searchName'.
     *
     * @param searchName the name of a Person to delete
     *
     * @return true if removed successfully; false otherwise
     */
    public boolean delete( String searchName )
    {
    	if(entry.containsKey(searchName)) {
    		entry.remove(searchName);
    		return true;
    	}
    	
        return false;
    }

    /**
     * Searches this address book for a Person
     * whose name is <code>searchName</code>.
     *
     * @param searchName the name to search
     *
     * @return a Person object if found; otherwise null
     */
    public Person search( String searchName ) {
        return entry.get(searchName);
    }
    
    public Collection<Person> getAllEntries() {
    	return entry.values();
    }
}

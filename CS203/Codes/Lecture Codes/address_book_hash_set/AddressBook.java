/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 10 Sample Program: Address Book Maintenance (Step 4)

    File: Step4/AddressBook.java
*/
package lesson4.address_book_hash_set;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;

import com.sun.corba.se.impl.encoding.OSFCodeSetRegistry.Entry;

/**
 * This class is designed to manage an address book that contains
 * Person objects. The user can specify the size of the address book
 * when it is created. If no size is specified, then the default size
 * is set to 25 Person objects.
 *
 */
class AddressBook  {    //Step 4: Implement the delete method


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
//    private List<Person>   entry;
    private Set<Person>   entry;

//--------------------------------
//    Constructors
//--------------------------------


    public AddressBook( ) {
//    	entry = new ArrayList<Person>();
    	entry = new HashSet<Person>();
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
    	entry.add(newPerson);
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
//        boolean    status;
//        int        loc;
//
//        loc = findIndex( searchName );
//
//        if (loc == NOT_FOUND) {
//            status = false;
//        } else { //found, pack the hole
//
//            entry.remove(loc);
//
//            status = true;
//        }
//
//        return status;
    	return entry.remove(search(searchName));
    }

    /**
     * Searches this address book for a Person
     * whose name is <code>searchName</code>.
     *
     * @param searchName the name to search
     *
     * @return a Person object if found; otherwise null
     */
//    public Person search( String searchName ) {
//        Person foundPerson;
////        int         loc = 0;
//
////        while ( loc < entry.size() &&
////                !searchName.equals( entry.get(loc).getName() ) ) {
////            loc++;
////        }
//
////        if (loc == entry.size()) {
////
////            foundPerson = null;
////        } else {
////
////            foundPerson = entry.get(loc);
////        }
//        Iterator<Person> iterator = entry.iterator();
//        
//        
//        while(iterator.hasNext()) {
//        	foundPerson = iterator.next();
//        	if(searchName.equals(foundPerson.getName()))
//        		return foundPerson;
//        }
//        return null;
//    }
  
    public Person search( String searchName ) {
    	Person searchPerson = new Person(searchName);
    	if(entry.contains(searchPerson)) {
    		return searchPerson;
    	}
    	return null;
    }



    /**
     * Finds the index in the array where <code>searchName</code>
     * is the name of a person to locate.
     *
     * @param searchName the name of person to find
     *
     * @return the index of the found Person in the array; NOT_FOUND
     *         if the searched person is not found
     */
//    private int findIndex( String searchName ) {
//        int loc = 0;
//
//        while ( loc < entry.size() &&
//                !searchName.equals( entry.get(loc).getName() ) ) {
//            loc++;
//        }
//
//        if (loc == entry.size()) {
//
//            loc = NOT_FOUND;
//        }
//
//        return loc;
//    }
}

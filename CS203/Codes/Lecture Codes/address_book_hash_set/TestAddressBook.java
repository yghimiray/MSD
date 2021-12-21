/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 10 Sample Program: A test main program for
            verifying the Step 4 AddressBook class.

    File: Step4/TestAddressBook.java
*/
package lesson4.address_book_hash_set;
class TestAddressBook {

    AddressBook     myBook;
    Person          person;

    public static void main (String[] args) {
        TestAddressBook tester = new TestAddressBook();
        tester.setupArray();
        tester.testDelete( );
    }

    public void setupArray() {
        myBook = new AddressBook();

        //add N Person objects
        for (int i = 0; i < 5; i++) {
            person = new Person( "Ms. X" + i, 10, 'F' );
            myBook.add( person );
        }
    }

    public void testDelete( ) {
        //first make sure the person is in the array
        person = myBook.search( "Ms. X2" );

        if ( person == null ) {
            System.out.println( "Error: Didn’t find the person it should" );
        } else {
            System.out.println( person.getName() + " is found okay." );

            boolean success = myBook.delete("Ms. X2" );

            if ( success ) {

                person = myBook.search( "Ms. X2" );

                if (person == null) {

                    System.out.println( "Okay: Deletion works" );
                } else {

                    System.out.println( "Error: Person is still there" );
                }
            } else {

                System.out.println( "Error: Deletion has a problem" );
            }
        }
    }
}
/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 13 Sample Program: Student.

    File: Student.java

*/
package lesson3.students;
/**
 * The Student class for the Chapter 13 illustration program.
 *
 */
class Student {

//----------------------------------
//    Data Members
//----------------------------------

    /**
     * The number of tests this student took
     */
    protected   final static int NUM_OF_TESTS = 3;

    /**
     * The name of this student
     */
    protected   String           name;

    /**
     * An array of the test scores this student received
     */
    protected   int[]            test;

    /**
     * The course grade of this student based on the test scores
     */
    protected   String           courseGrade;


//----------------------------------
//    Constructors
//----------------------------------

    /**
     * Default constructor
     */
    public Student( ) {
        this("No Name");
    }

    /**
     * Constructs a new Student with the passed
     * name.
     *
     * @param studentName the name of this student
     */
    public Student(String studentName) {
        name = studentName;
        test = new int[NUM_OF_TESTS];
        courseGrade = "****";
    }


//-------------------------------------------------
//      Public Methods:
//
//         String      getCourseGrade      (           )
//         String      getName             (           )
//         int         getTestScore        ( int       )
//
//         void        setName             ( String    )
//         void        setTestScore        ( int, int  )
//
//------------------------------------------------

    /**
     * Returns the course grade of this student.
     *
     * @return this student's course grade
     */
    public String getCourseGrade( ) {
      return courseGrade;
    }

    /**
     * Returns the name of this student.
     *
     * @return this student's name
     */
    public String getName( ) {
      return name;
    }

    /**
     * Returns the score of the designated test
     *
     * @param testNumber the test id
     *
     * @return the score of the designated test
     */
    public int getTestScore(int testNumber) {
      return test[testNumber-1];
    }

    /**
     * Sets the name of this student
     *
     * @param newName the name of this student
     */
    public void setName(String newName) {
      name = newName;
    }

    /**
     * Sets the score of the test
     *
     * @param testNumber the test id
     * @param testScore  the score for the test id
     */
    public void setTestScore(int testNumber, int testScore) {
      test[testNumber-1] = testScore;
    }
    
    /**
     * Dummy "do nothing" method to be overridden in the subclasses
     */
    public void computeCourseGrade( ) {
    	
    	//do nothing - override this method in the subclass
    }

}
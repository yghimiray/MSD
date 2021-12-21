/*
    Introduction to OOP with Java (5th Ed), McGraw-Hill

    Wu/Otani

    Chapter 13 Sample Program: Undergraduate student.

    File: UndergraduateStudent.java

*/
package lesson3.students;
/**
 * The UndergraduateStudent subclass for Chapter 13 illustration program.
 *
 */
class UndergraduateStudent extends Student {


    /**
     * Computes the course grade (Pass/No Pass) from the tests
     * based on the criteria for the undergraduate
     * students. Pass if avg >= 70; otherwise, No Pass.
     *
     */
    public void computeCourseGrade() {
      int total = 0;

      for (int i = 0; i < NUM_OF_TESTS; i++) {
         total += test[i];
      }

      if (total / NUM_OF_TESTS >= 70) {
         courseGrade = "Pass";
      } else {
         courseGrade = "No Pass";
      }
    }
}
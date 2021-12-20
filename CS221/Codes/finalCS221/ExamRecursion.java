package finalCS221;

import java.util.Iterator;

public class ExamRecursion {

    public static boolean hasDuplicate(int [] arr, int first){
        //TODO Q4B
    	int last = arr.length-1;
    	first=1;
    	if(first>last) {
    		return false;
    	}
    	
    	if(arr[first]==arr[first-1]) {    		
    		return false;    		
    	}else {
    	hasDuplicate(arr, first+1);
    	}
        return true;
    
    }





    public static void main (String[] args){
        int [] nums1 = {1, 2, 3, 4, 5};
        int [] nums2 = {1, 2, 2, 4, 5};

        System.out.println("nums1: " + hasDuplicate(nums1,0));
        System.out.println("nums1: " + hasDuplicate(nums2,0));

        /**************
        Expected answer:

        nums1: false
        nums1: true
        **************/

    }
}

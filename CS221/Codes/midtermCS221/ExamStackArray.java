package midtermCS221;

import java.util.Arrays;
import java.util.EmptyStackException;

public class ExamStackArray<E> implements StackInterface<E> {


    E [] data;
  
    int top = -1;
    private static final int INITIAL_CAPACITY = 10;

    public ExamStackArray(){
        data =  (E[]) new Object[INITIAL_CAPACITY];
    }

    public ExamStackArray(int capacity){
        data =  (E[]) new Object[capacity];
        
    }


    @Override
    public E push(E obj) {
        if(top==data.length-1){
            reallocate();
        }
        top++;
        data[top] = obj;
        return obj;
    }

    @Override
    public E peek() {
        if (empty()) {
            throw new EmptyStackException();
        }
        return data[top];
    }

    @Override
    public E pop() {
        if (empty()) {
            return null;
        }
        E hand = data[top];
        top--;
        return hand;
    }

    @Override
    public boolean empty() {
        return (top == -1);
    }

    private void reallocate(){
        data = Arrays.copyOf(data, 2 * data.length);
    }

    @Override
    public int getSize(){
        return top+1;
    }

    public E getTop(){
        if(empty()){
            return null;
        }
        return data[top];
    }

    public int[] Q3C_flushOutToArray(){
        //TODO write your implementation here ...
    	int length=this.getSize();
    	  int [] newData = new int [length];
    	if(empty()) {
    		return null;
    	}
    	
  
    	for(int i=0; i< length; i++) {    	
    		int arrayElement = (int) this.pop();
    		newData[i]= arrayElement;
    		
    	}
  
        return newData;
    }

    public static void main (String[] args){
        StackInterface<Integer> st = new ExamStackArray<>();
        st.push(5);
        st.push(6);
        st.push(7);

        int [] numArr = st.Q3C_flushOutToArray();

        // FIXME remove the comment tags to test the method
        for (int i : numArr){
            System.out.println(i);
        }


        /*
        Expected result
                    7
                    6
                    5
        */


    }

}

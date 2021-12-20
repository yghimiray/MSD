package finalCS221;

import java.util.NoSuchElementException;

public class ExamLinkedQueue<E> implements MyQueue<E> {

    private Node<E> front;
    private Node<E> rear;
    private int size;

    // NODE CLASS
    private static class Node<E>{
        private E data;
        private Node<E> next;

        private Node (E data){
            this.data = data;
            this.next = null;
        }
        private Node (E data, Node<E> ref){
            this.data = data;
            this.next = ref;
        }
    }

    @Override
    public boolean add(E e) {
        Node<E> newNode = new Node<E> (e);
        if(front == null){              // In this case update both front and rear
            rear = newNode;
            front = rear;
        }else{
            rear.next = newNode;        // Add to rear/tail
            rear = rear.next;           // Update rear/tail
        }
        size++;
        return true;
    }

    @Override
    public boolean offer(E e) {
        Node<E> newNode = new Node<E>(e);
        if(front == null){              // In this case update both front and rear
            rear = newNode;
            front = rear;
        }else{
            rear.next = newNode;        // Add to rear/tail
            rear = rear.next;           // Update rear/tail
        }
        size++;
        return true;
    }

    @Override
    public E remove() {

        return null;
    }

    @Override
    public E poll() {
        //TODO Q4A1
    	if(front==null) {
    		return null;
    	}
    	E hand = front.data;
    	front=front.next;    	
        return hand;
    }

    @Override
    public E element() {
        if(size == 0){
            throw new NoSuchElementException();
        } else {
            return front.data;
        }
    }

    @Override
    public E peek() {
        if(size == 0){
            return null;
        } else {
           return front.data;
        }
    }

    @Override
    public int getSize() {
        return size;
    }

    public String[] flushtoArray(){
        //TODO Q4A2
       String[] arr = new String[3];

    	   for(int i=0; i<3; i++) {
    		   arr[i]=(String) poll();
    	   }
      	
        return arr;
    }

    public static void main (String[] args){

        ExamLinkedQueue<String> q = new ExamLinkedQueue<>();
        q.offer("John");
        q.offer("Dave");
        q.offer("Bob");

        String[] names = q.flushtoArray();
        for(String n : names){
            System.out.println(n);
        }
        /**************
         Expected answer:

         John
         Dave
         Bob
         **************/



    }
}

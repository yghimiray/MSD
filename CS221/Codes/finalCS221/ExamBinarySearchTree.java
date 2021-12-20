/*<listing chapter="6" section="4">*/
package finalCS221;

import java.util.Arrays;

class Node<E> {

    public E data;
    public Node<E> left;
    public Node<E> right;

    public Node(E data) {
        this.data = data;
        left = null;
        right = null;
    }

    @Override
    public String toString() {
        return data.toString();
    }
}

public class ExamBinarySearchTree<E extends Comparable<E>>  implements SearchTree<E> {

    protected boolean inserted;
    protected E deleteReturn;
    Node<E> root;

    public ExamBinarySearchTree() {
        root = null;
    }

     ExamBinarySearchTree(Node<E> root) {
        this.root = root;
    }

    

    @Override
    public E find(E target) {
        return find(root, target);
    }

    private E find(Node<E> localRoot, E target) {
        if (localRoot == null) {
            return null;
        }

        int compResult = target.compareTo(localRoot.data);
        if (compResult == 0) {
            return localRoot.data;
        } else if (compResult < 0) {
            return find(localRoot.left, target);
        } else {
            return find(localRoot.right, target);
        }
    }

    @Override
    public boolean add(E item) {
        root = add(root, item);  // the caller
        return inserted;
    }


    private Node<E> add(Node<E> localRoot, E item) {
        if (localRoot == null) {

            inserted = true;
            return new Node<E>(item);
        } else if (item.compareTo(localRoot.data) == 0) {

            inserted = false;
            return localRoot;
        } else if (item.compareTo(localRoot.data) < 0) {

            localRoot.left = add(localRoot.left, item);
            return localRoot;
        } else {

            localRoot.right = add(localRoot.right, item);
            return localRoot;
        }
    }

    public E delete(E target) {
        root = delete(root, target);
        return deleteReturn;
    }
   
    public E getRoot(){
    	return (E) root.toString();
    }

    private Node<E> delete(Node<E> localRoot, E item) {

        if (localRoot == null) {

            deleteReturn = null;
            return localRoot;
        }


        int compResult = item.compareTo(localRoot.data);
        if (compResult < 0) {
            localRoot.left = delete(localRoot.left, item);
            return localRoot;
        } else if (compResult > 0) {
            localRoot.right = delete(localRoot.right, item);
            return localRoot;
        } else {
            deleteReturn = localRoot.data;
            if (localRoot.left == null) { // Case 1 - leaf node
                return localRoot.right;
            } else if (localRoot.right == null) {
                return localRoot.left;
            } else {
                if (localRoot.left.right == null) {
                    localRoot.data = localRoot.left.data;
                    localRoot.left = localRoot.left.left;
                    return localRoot;
                } else {
                    localRoot.data = findPredessor(localRoot.left);
                    return localRoot;
                }
            }
        }
    }

    public boolean remove(E target) {
        return delete(target) != null;
    }

    public boolean contains(E target) {
        return find(target) != null;
    }
    private E findPredessor(Node<E> parent) {
        if (parent.right.right == null) {
            E returnValue = parent.right.data;
            parent.right = parent.right.left;
            return returnValue;
        } else {
            return findPredessor(parent.right);
        }
    }


    private E findSuccessor(Node<E> parent) {
        if (parent.left.left == null) {
            E returnValue = parent.left.data;
            parent.left = parent.left.right;
            return returnValue;
        } else {
            return findSuccessor(parent.left);
        }
    }



	int count =0;
    public int countNodesInRange(Node<E> node, int f, int l){
        //TODO Q4C

       if(node==null) {
    	   count=count+ 0;
       }else {
    	   
       countNodesInRange(node.left, f, l);
       if((int) node.data >= (int) f && (int) node.data <= (int) l) {
    	   count++;
       }
       countNodesInRange(node.right, f, l);
       }
                
        return count;
    }
    

    public static void main(String args[]){
    	java.util.List<Integer> list = Arrays.asList(56,46,36,66,50, 32, 60, 70, 55, 59,72,69);
    	ExamBinarySearchTree<Integer> bst = new ExamBinarySearchTree();
    	for(int i=0;i<list.size();i++)
    		bst.add(list.get(i));

        System.out.println(bst.countNodesInRange(bst.root, 50, 60));
        // or System.out.println(bst.countNodesInRange(50, 60));
        /**************
         Expected answer:

         5
         **************/




    }
   
}


package com.example.spring_first;


public class Gener {

     public static <D> void  printArray(D[] a) {
         for (D item : a) {
             System.out.println(item);
         }

     }

//    private T a;
//
//    void set(T a){
//        this.a=a;
//    }
//
//    T get() {
//        return this.a;
//    }
//
//    void display(T a){
//        System.out.println("display called: "+a);
//    }

    public static void main(String[] args){
//        gen.set(56);
//        System.out.println(gen.get());

             Integer[] arr = {1, 5, 7, 8, 9, 56};
             String[] arr2 = {"yooyo", "get", "pet"};
             printArray(arr);
             printArray(arr2);

         }

}

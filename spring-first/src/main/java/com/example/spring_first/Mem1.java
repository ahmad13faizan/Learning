package com.example.spring_first;

import java.util.ArrayList;

public class Mem1 {

    public static void main(String []args) {

        String str="Example string";
        String str2=new String("okay");



        int a=100;  //stored in stack
        Integer obj =22; //reference or address of the variable is stored in the stack but the
        //object and properties are stored in the heap area in young generation firstly
        System.out.println(obj);

        ArrayList<Integer> list=new ArrayList<>();

        int i=0;

        while(true){
            try {
                list.add(i++);

                /*Exception in thread "main" java.lang.OutOfMemoryError: Java heap space
                at java.base/java.util.Arrays.copyOf(Arrays.java:3512)
                at java.base/java.util.Arrays.copyOf(Arrays.java:3481)
                at java.base/java.util.ArrayList.grow(ArrayList.java:237)
                at java.base/java.util.ArrayList.grow(ArrayList.java:244)
                at java.base/java.util.ArrayList.add(ArrayList.java:454)
                at java.base/java.util.ArrayList.add(ArrayList.java:467)
                at com.example.spring_first.Mem1.main(Mem1.java:23)

> Task :com.example.spring_first.Mem1.main() FAILED
                3 actionable tasks: 1 executed, 2 up-to-date
                 */

            } catch (Exception e) {
                System.out.println("okay error caught");
                e.printStackTrace();
            }
        }



    }
}

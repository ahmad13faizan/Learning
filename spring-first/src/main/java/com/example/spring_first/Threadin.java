package com.example.spring_first;

class Threadin{

      static void table(int no,int iterator) {
         if (iterator == 11) {
             return;
         }
         System.out.println(no + " * " + iterator + "= " + no * iterator);
         table(no,++iterator);
     }
    public static void main(String[] args) {

        Thread t1=new Thread(()->{
            table(2,1);
        });

        Thread t2=new Thread(()->{
            table(4,1);

        });
        t1.start();
        t2.start();

    }

}
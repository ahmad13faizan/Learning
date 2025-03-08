package com.example.spring_first;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

final class Immutable{
 private int mem;

}


class Singleton{
    private Singleton obj;
    Singleton getinstance(){
        obj=null;
        if(obj==null){
            return new Singleton();
        }
        return  null;
    }
}

class Employee {

    String name;
    String department;
    int id;
    List<String> hobbies;


    Employee(String name, String department, int id, List<String> hobbies){
        this.name=name;
        this.department=department;
        this.id=id;
        this.hobbies=hobbies;
    }

    public static void main(String[] args) {
        List<Employee> list=new ArrayList<>();

        List<String> hobby=new ArrayList<String>();
        hobby.add("playing");
        list.add(new Employee("Shiva","BE",1,hobby));

        List<String> hobby2=new ArrayList<String>();
        hobby2.add("singing");
        list.add(new Employee("Rohit","BE",2,hobby2));

        List<String> hobby3=new ArrayList<String>();
        hobby3.add("reading");
        list.add(new Employee("Mohit","DE",3,hobby3));

        List<String> hobby4=new ArrayList<String>();
        hobby4.add("dancing");
        list.add(new Employee("Gurvinder","DE",4,hobby4));

        List<String> hobby5=new ArrayList<String>();
        hobby5.add("struggling");
        list.add(new Employee("Gurvinder","BE",4,hobby5));


        list.stream().forEach((obj)->{

            if(obj.department.equals(""))
            System.out.println(obj.name);

        });

        System.out.println( list.stream().map((obj)->{return obj.name;}));

        ExecutorService ser= Executors.newSingleThreadExecutor();
        ser.submit(new Runnable() {
            @Override
            public void run() {
                System.out.println("lalala");
            }
        });

        ser.submit(new Runnable() {
            @Override
            public void run() {
                System.out.println("yoyoyo");
            }
        });

        new ab(){
            @Override
            public void cd() {
                System.out.println("okay1");
            }

            @Override
            public void ab() {
                System.out.println("okay2");
            }
        };

    }


    interface ab{
        void ab();
        void cd();
    }


    static class Imp implements ab {
        @Override
        public void ab() {
            System.out.println("1");
        }

        @Override
        public void cd() {
            System.out.println("2");
        }
    }

}
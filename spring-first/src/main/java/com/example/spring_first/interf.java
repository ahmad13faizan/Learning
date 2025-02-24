package com.example.spring_first;


import java.util.Comparator;

@FunctionalInterface
interface Example1{
    void add();

    default  void sub(){
        System.out.println("yoyoyo");
    };

    default void mul(){
        System.out.println("yoyoyo2");
    }
}


class Student {
    int rollno;
    String name;

    // Constructor
    Student(int rollno, String name) {
        this.rollno = rollno;
        this.name = name;
    }

    // Method to print Student
    // details in main()
    @Override
    public String toString() {
        return rollno + ": " + name;
    }
}

class SortbyRoll implements Comparator<Student>
{
    // Compare by roll number in ascending order
    public int compare(Student a, Student b) {
        return a.rollno - b.rollno;
    }
}


@FunctionalInterface
interface Example2 extends  Example1{
    default void minus(){
        System.out.println("minus");
    }
}

public class interf {

    public static void main(String[] args) {

        Object o=new Object();

    }
}

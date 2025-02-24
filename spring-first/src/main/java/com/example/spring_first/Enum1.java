package com.example.spring_first;

enum Competency{
    Java,JavaScript,Python;
        }

public class Enum1 {

    public static void main(String[] args) {
        Competency comp=Competency.Java;

        Competency collect[]=Competency.values();

        for(Competency c: collect){
            System.out.println(c);
        }

    }


}

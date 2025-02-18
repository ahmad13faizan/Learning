package com.example.spring_first;

import java.util.ArrayList;

public class Li {

    public static void main(String[] args) {
        ArrayList <Integer> li1= new ArrayList<>();
        ArrayList <Integer> li2= new ArrayList<>();

        for (int i = 1; i < 20; i++) {
            li1.add(i);
            li2.add(i+10);
        }

        ArrayList<Integer> finalli =new ArrayList<>();

        for (Integer i: li2) {
            finalli.add(i);
        }

        for (Integer i: li1) {
            finalli.add(i);
        }

        System.out.println(finalli);


    }
}

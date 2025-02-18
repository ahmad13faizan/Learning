package com.example.spring_first;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

class Streamex {

    public static void main(String[] args) {
        int[] arr = new int[]{1,2,4,5,6,7} ;
        List<Integer> al = Arrays.asList(1,2,3,4,5,6);

        Float d=  10.6f;
       List<Integer> list =al.stream().map((n)->n%2).collect(Collectors.toList()) ;
        System.out.println(list);
    }

}

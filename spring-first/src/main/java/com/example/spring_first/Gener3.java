package com.example.spring_first;

public class Gener3<T,U> {
    final private T a;
    final private U b;

    Gener3(T a,U b){
     this.a=a;
     this.b=b;
    }

    void swap(){
//         this.b=this.a+this.b;

    }

    public static void main(String[] args) {
        Gener3 gen=new Gener3(2,3);

    }
}

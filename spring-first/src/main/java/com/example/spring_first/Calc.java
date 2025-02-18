package com.example.spring_first;
import java.util.Scanner;

public class Calc {

    class IllegalArgumentException extends Exception{
        IllegalArgumentException(String message){
            super("message");
        }
    }


    public static void main(String[] args) {
        Calc c1=new Calc();
        int input1,input2;

        Scanner sc =new Scanner(System.in);

        System.out.println("Choose a symbol to do the operation: + - * /");
        char operation= sc.next().charAt(0);

        System.out.println("Enter two values");

        try{

            if(operation!='/' && operation!='*' && operation!='+' && operation!='-'){
                throw new IllegalAccessException("invalid operation");
            }

        input1=sc.nextInt();
        input2=sc.nextInt();



        switch(operation){
            case '/':System.out.println("your answer is: "+(input1/input2));
            break;
            case '*':System.out.println("your answer is: "+(input1*input2));
            break;
            case '+':System.out.println("your answer is: "+(input1+input2));
            break;
            case '-':System.out.println("your answer is: "+(input1-input2));
            break;
        }

        }
        catch(Exception e){
            e.printStackTrace();
            System.out.println("okay");
        }
    }


}

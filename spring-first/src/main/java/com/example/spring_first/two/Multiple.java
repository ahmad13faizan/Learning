package com.example.spring_first.two;

public class Multiple {
    public static void main(String[] args){
        SoftwareEngineer se= new SoftwareEngineer();

        se.writeCode();
        se.testSoftware();
    }

}


interface Developer{

    void writeCode();

}

interface Tester{
    void testSoftware();
}


class SoftwareEngineer implements Tester,Developer{

    @Override
    public void writeCode() {
        System.out.println("Writing code");
    }

    @Override
    public void testSoftware() {
        System.out.println("Test Software");
    }
}
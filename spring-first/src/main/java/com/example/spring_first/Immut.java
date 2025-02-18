package com.example.spring_first;


final class Immut {
    private final String name;
    private final int age;

    public static void main(String[] args) {
        System.out.println("okay okay :");
    }

    public Immut(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }
}

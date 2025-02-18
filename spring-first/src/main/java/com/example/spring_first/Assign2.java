package com.example.spring_first;

public class Assign2 {

    public static void main(String[] args) {
        Developer d1=new Developer(1,10000);
        Manager m1=new Manager(2,20000);

        d1.calculateBonus();
        m1.calculateBonus();
    }
}


abstract class Employee{
    final private int id;
    final private float salary;
    abstract void calculateBonus();


    float getSalary(){
        return salary;
    }

    Employee(int id,float salary){
        this.id=id;
        this.salary=salary;
    }
}


class Manager extends Employee{

    Manager(int id, float salary){
        super(id, salary);
    }

    @Override
    void calculateBonus() {
        System.out.println("Your  bonus is : "+super.getSalary()*0.2);
    }
}



class Developer extends Employee{
    
    Developer(int id, int salary){
        super(id,salary);
    }

    @Override
    void calculateBonus() {
        System.out.println("Your  bonus is : "+super.getSalary()*0.1);
    }
}
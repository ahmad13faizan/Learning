package com.example.spring_first;

import java.util.*;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.stream.Collectors;


final class Employee implements Comparable<Employee> {

    private final String name;
    private final String department;
    private final int id;
    private final List<String> hobbies;
    private static Employee obj;

    static Employee getInstance(String name, String department, int id, List<String> hobbies) {
        if (obj == null) {
            return new Employee(name, department, id, hobbies);
        }
        return obj;
    }

    private Employee(String name, String department, int id, List<String> hobbies) {
        this.name = name;
        this.department = department;
        this.id = id;
        this.hobbies = hobbies;
    }

    @Override
    public String toString() {
        return "Employee{" +
                "name='" + name + '\'' +
                ", department='" + department + '\'' +
                ", id=" + id +
                ", hobbies=" + hobbies +
                '}';
    }

    public static void main(String[] args) {
        List<Employee> list = new ArrayList<>();

        List<String> hobby = new ArrayList<String>();
        hobby.add("playing");
        list.add(new Employee("Shiva", "BE", 1, hobby));

        List<String> hobby2 = new ArrayList<String>();
        hobby2.add("singing");
        list.add(new Employee("Rohit", "BE", 2, hobby2));

        List<String> hobby3 = new ArrayList<String>();
        hobby3.add("reading");
        list.add(new Employee("Mohit", "DE", 3, hobby3));

        List<String> hobby4 = new ArrayList<String>();
        hobby4.add("dancing");
        list.add(new Employee("Gurvinder", "DE", 4, hobby4));

        List<String> hobby5 = new ArrayList<String>();
        hobby5.add("struggling");
        list.add(new Employee("Gurvinder", "BE", 5, hobby5));

        HashMap<Employee,Integer> employeeMap=new HashMap<>();

        for (Employee emp : list) {
            employeeMap.put(emp, emp.id);
        }

        System.out.println("This is the employee map"+employeeMap);

        Map<Employee,Integer> sortedMap = new TreeMap<>(employeeMap);

        System.out.println("This is a sorted map"+sortedMap);

        System.out.println("names having BE");
        list.stream().forEach((obj) -> {
            if (obj.department.equals("BE"))
                System.out.println(obj.name);
        });

        list.stream().filter(obj -> obj.department.equals("BE")).
                collect(Collectors.toList()).forEach((obj) -> {
                    System.out.println(obj.name);
                });

        System.out.println("names in reverse id order");
        list.stream().map((obj) -> {
            return obj;
        }).sorted((obj, obj2) -> {
            return obj2.id - obj.id;
        }).forEach((obj) -> {
            System.out.println(obj.name);
        });

        List<String> names = Arrays.asList("Alice", "Bob", "Charlie", "David");
        List<Integer> priorities = Arrays.asList(2, 0, 3, 1);


        List<Integer> indices = new ArrayList<>();
        for (int i = 0; i < names.size(); i++) {
            indices.add(i);
        }


        indices.sort(Comparator.comparingInt(priorities::get));


        List<String> sortedNames = new ArrayList<>();
        for (int index : indices) {
            sortedNames.add(names.get(index));
        }



        ExecutorService ser = Executors.newSingleThreadExecutor();

        ser.submit(() -> {
            System.out.println("names that dont have BE");
            list.stream().filter(obj -> !obj.department.equals("BE")).
                    collect(Collectors.toList()).forEach((obj) -> {
                        System.out.println(obj.name);
                    });
        });

        ser.submit(() ->  System.out.println(sortedNames));

        ser.shutdown();

        System.out.println("printing the interface methods with anonymous class");

        new ab() {
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

    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null || getClass() != obj.getClass()) {
            return false;
        }

        Employee employee = (Employee) obj;
        return this.id == employee.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    @Override
    public int compareTo(Employee other) {
        return this.name.compareTo(other.name);
    }


    interface ab {
        void ab();

        void cd();
    }

}






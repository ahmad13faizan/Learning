package com.example.spring_first;

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Task implements Runnable{
    int id;
    public Task(int id) {
        this.id = id;
    }
    @Override
    public void run() {
        System.out.println("Thread name::"+Thread.currentThread().getName()+" Start :"+id);
        try {
            Thread.sleep(2000L);
        } catch (InterruptedException ignored) {
        }

        System.out.println("Thread name::"+Thread.currentThread().getName()+" End :"+id);
    }
}

class ExecutorServiceDemo {
    public static void main(String[] args) {
        ExecutorService executorService= Executors.newFixedThreadPool(2);
        for (int i = 0; i <= 10; i++) {
            executorService.submit(new Task(i));
        }
        executorService.shutdown();
    }
}

package com.example.spring_first;

import java.util.HashMap;
import java.util.Map;

public class Mem3 {
    private static final Map<Integer, String> cache = new HashMap<>();

    public static void main(String[] args) {
        int i = 0;

        while (true) {
            cache.put(i, "Data " + i);
            System.out.println("Stored object " + i);
            i++;

            try {
                Thread.sleep(10);
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            // Print memory usage periodically
            if (i % 1000 == 0) {
                Runtime runtime = Runtime.getRuntime();
                System.out.println("Used Memory: " +
                        (runtime.totalMemory() - runtime.freeMemory()) / (1024 * 1024) + " MB");
            }
        }
    }
}

package com.example.spring_first;

import java.lang.ref.WeakReference;
import java.util.HashMap;
import java.util.Map;

class Cache {
    private final Map<Integer, WeakReference<String>> cache = new HashMap<>();

    public void addToCache(int key, String value) {
        cache.put(key, new WeakReference<>(value));
    }

    public String getFromCache(int key) {
        WeakReference<String> ref = cache.get(key);
        return (ref != null) ? ref.get() : null;
    }

    public void printCacheStatus() {
        System.out.println("Cache contents:");
        cache.forEach((key, ref) -> {
            String value = ref.get();
            System.out.println("Key: " + key + ", Value: " + (value != null ? value : "Garbage Collected"));
        });
    }
}

public class Mem4 {
    public static void main(String[] args) {
        Cache cache = new Cache();

        for (int i = 1; i <= 5; i++) {
            cache.addToCache(i, "Data " + i);
        }

        cache.printCacheStatus();

        System.gc();

        try {
            Thread.sleep(2000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        System.out.println("\nAfter GC:");
        cache.printCacheStatus();
    }
}

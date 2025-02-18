package com.example.spring_first;
import java.util.HashMap;
import java.util.Map;

public class NRP {

    public static void main(String[] args) {

        String str="aaqddwertyuiopasdfghjkklt";

       
        HashMap<Character,Integer> map =new HashMap<>();

        for (int i=0;i<str.length();i++) {
            if (map.containsKey(str.charAt(i))) {
                map.put(str.charAt(i), map.get(str.charAt(i))+1);
            }else {
                map.put(str.charAt(i), 1);
            }
        }

        for (int i = 0; i < str.length(); i++) {
            if(map.get(str.charAt(i))==1){
                System.out.println("Your answer is: "+str.charAt(i));
                break;
            }
        }



    }
}

package com.example.spring_first;

import java.util.Arrays;


public class TwoSum {
    static int[] find(int targetsum,int[] arr,int low, int high){

        while(low<high) {
            if (arr[low] + arr[high] == targetsum) {
                break;
            } else if (targetsum < arr[low] + arr[high]) {
                high--;
            } else {
                ++low;
            }
        }
        return new int[]{arr[low],arr[high]};
    }

    public static void main(String[] args) {

        int sum=30;
        int[] arr ={5,8,0,4,3,22,11};

        Arrays.sort(arr);

        int[] ans=find(sum,arr,0,arr.length-1);


        for (int i :ans){
            System.out.println(i);
        }

    }


}

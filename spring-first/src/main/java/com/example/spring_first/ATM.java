package com.example.spring_first;

import javax.naming.InsufficientResourcesException;

class InsufficientFundsException extends Exception{
    InsufficientFundsException(String message){
        super(message);
    }
}

public class ATM {
    private float balance;
    private float principle;


    ATM(float balance){
        this.balance=balance;
    }

    void deposit(int amount){
        this.balance+=amount;
        System.out.println("Successfully deposited ! and balance is: "+this.getBalance());
    }

    private float getBalance() {
        return this.balance;
    }

    void withdraw(int amount) throws InsufficientFundsException{
        if(amount>balance){
            throw new InsufficientFundsException("Insufficient fund. Your balance is: "+this.getBalance());

        }
        this.balance-=amount;
        System.out.println("Successfully withdrawn ! and balance is: "+this.getBalance());
    }

    public static void main(String[] args) {
        try{
            ATM atm1=new ATM(2000);
            atm1.withdraw(2100);
            atm1.deposit(2000);
        }
        catch(InsufficientFundsException e){
            e.printStackTrace();

        }

    }
}




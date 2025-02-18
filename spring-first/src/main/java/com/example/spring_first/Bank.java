package com.example.spring_first;

class BankAccount{

    final private double accountNumber;
    private double balance;
    final private String ownerName;

    BankAccount(double accountNumber,double balance,String ownerName){
        this.accountNumber=accountNumber;
        this.balance=balance;
        this.ownerName=ownerName;
    }

    String getOwnerName(){
        return ownerName;
    }
    double getBalance(){
        return balance;
    }

    void setBalance(double balance){
        this.balance=balance;
    }

    public double getAccountNumber() {
        return accountNumber;
    }

    public String getOwnerName(String ownerName) {
        return ownerName;
    }

    void deposit(int amount){
        this.balance+=amount;
        System.out.println("Successfully deposited ! and balance is: "+this.getBalance());
    }

    void withdraw(int amount){
        this.balance-=amount;
        System.out.println("Successfully withdrawn ! and balance is: "+this.getBalance());
    }
}





class SavingsAccount extends BankAccount{
    private float interestRate;

    @Override
    void withdraw(int amount){
        System.out.println("overriden method");
    }

    float getInterestRate(){
        return interestRate;
    }

    SavingsAccount(double accountNumber, double balance, String ownerName) {
        super(accountNumber, balance, ownerName);
    }
    void applyInterest(float r, float t ){
        setBalance(super.getBalance()+((super.getBalance()*r*t)/100));
    }

    void applyInterest(float r, float t, float fine){
        setBalance(super.getBalance()+((super.getBalance()*r*t)/100)-fine);
    }

}





class Bank{

    public static void main(String[] args) {
        BankAccount b1=new BankAccount(1,32000,"Ravish Kumar");

        b1.deposit(400);
        b1.deposit(200);

        b1.withdraw(400);

        System.out.println(b1.getOwnerName());

        SavingsAccount sb1=new SavingsAccount(2,20000,"Faizan Ahmad");

        sb1.applyInterest(3,6);

        System.out.println(sb1.getBalance());
    }
}



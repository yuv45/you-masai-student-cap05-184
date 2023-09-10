"use strict"
function  Bankaccount(accountnumber,name,balance,type){
    this.accountnumber=accountnumber
    this.name=name
    this.balance=balance
    this.type=type
   let count=0;
    this.deposit=function(amount){
      count++
    console.log(this.balance+=amount)
    
    }
    this.withdraw=function(amount)
    {
     if(amount>this.balance){
        alert("balance is not sufficient")
     }
     else{
        console.log(this.balance-=amount)
        
     }
    count++
    }
    this.checkbalance=function(){
     console.log(this.balance)
     count++
     
    }
    this.isActive=function(){
    if(count!=0){
      console.log("Account is active")
    }
    else{
      console.log("Account is Inactive")
    }
    }

}
var bankaccount=new Bankaccount(36415000128710,"shyam",900264.23,"current");
var bankaccount2=new Bankaccount(36415004852457,"ram",264.23,"savings");
var bankaccount3=new Bankaccount(36415000128710,"tarun",64.23,"savings");
var bankaccount4=new Bankaccount(36415024882548,"ramu",9000264.23,"current");

let getTotalBalance=function(){
   return bankaccount.balance+bankaccount2.balance+bankaccount3.balance+bankaccount4.balance
}
console.log(bankaccount)
bankaccount.deposit(9000)

bankaccount.withdraw(90264.23)

bankaccount.checkbalance()
bankaccount.isActive()
 console.log(bankaccount2)
bankaccount2.deposit(9000)

bankaccount2.withdraw(64.23)

bankaccount2.checkbalance()
bankaccount3.isActive()
console.log(bankaccount3)
bankaccount3.deposit(9000)

bankaccount3.withdraw(4.23)

bankaccount3.checkbalance()
bankaccount3.isActive()
console.log(bankaccount4)
bankaccount4.deposit(9000)

bankaccount4.withdraw(90264.23)

bankaccount4.checkbalance()
bankaccount4.isActive()

 console.log("sum of all active balances = "+ getTotalBalance())




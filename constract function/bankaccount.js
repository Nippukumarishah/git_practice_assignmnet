function BankAccount(accountNumber, name, type, balance){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
    this.deposit = function(amount){
        if(amount > 0){
        this.balance += amount;
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
    }
    else{
        console.log('Invalid Deposit amount. Amount must be greater than 0');
    }
    }
    this.withdraw = function(amount){
        if(this.active){
            if( amount <= this.balance){
                this.balance -= amount;
                console.log(`Withdrawn ${amount}. New balance: ${this.balance}`);
            }
            else
            {
                console.log('Invalid withdrawal amount or insufficient balance.');            
            }
           
        }
    }

    this.checkbalance = function(){
        console.log(`Account balance: ${this.balance}`);
    }
    this.isActive = function(){
        return this.active;
    }
    
   
};

function getTotalBalance(accounts){
    let totalbalance = 0;
    accounts.forEach(account => {
        if(account.isActive()){
            totalbalance +=account.balance;
        }
        
    });
    return totalbalance;

}
let acc1 = new BankAccount(12354648, "samyak anand", 'Savings', 4000);
let acc2 = new BankAccount(537223482, "sam gupta", "savings", 2000);
let acc3 = new BankAccount(23838348, 'ishika gupta', 'Savings', 4500);

acc1.deposit(1500);
acc1.withdraw(900);
acc1.checkbalance();

acc2.deposit(2000);
acc2.withdraw(1000);
acc2.checkbalance();

acc3.deposit(2500);
acc3.withdraw(1500);
acc3.checkbalance();

console.log(`Account 1 active: ${acc1.isActive()}`);
console.log(`Account 2 active: ${acc2.isActive()}`);
console.log(`Account 3 active: ${acc3.isActive()}`);

let accounts = [acc1,acc2,acc3];
let totalbalance = getTotalBalance(accounts);
console.log(`Total balance of all active accounts: ${totalbalance}`);


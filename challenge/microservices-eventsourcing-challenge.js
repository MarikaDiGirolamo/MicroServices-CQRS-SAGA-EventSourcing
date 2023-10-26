class BankAccount {
    constructor() {
        this.balance = 0;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        this.balance -= amount;
    }

    getBalance() {
        return this.balance;
    }

    printOperations() {
        console.log('No operations were recorded!');
    }
}

// MAIN

let account = new BankAccount();
account.deposit(100);
account.deposit(20);
account.withdraw(50);
account.deposit(30);
account.withdraw(80);
account.printOperations();
console.log("Total: " + account.getBalance());


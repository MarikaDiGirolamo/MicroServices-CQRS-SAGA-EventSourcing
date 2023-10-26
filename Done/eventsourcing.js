class BankAccount {
    constructor() {
        this.transactions = [];
    }

    deposit(amount) {
        this.transactions.push(amount);
    }

    withdraw(amount) {
        this.transactions.push(-1 * amount);
    }

    getBalance() {
        return this.transactions.reduce((acc,curr) => acc + curr);
    }

    printOperations() {
        for(let i = 0; i < this.transactions.length; i++){
            console.log(`Operation ${i}: ${this.transactions[i]}`);
        };
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


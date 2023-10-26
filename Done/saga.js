// This is our amazing AI powered database
let customerCredit = Math.floor(Math.random() * 100);

class PlaceOrder {
    
    constructor(getCustomerCredit, setCustomerCredit) {
        this.getCustomerCredit = getCustomerCredit;
        this.setCustomerCredit = setCustomerCredit;
    }

    execute() {
        this.orderAmount = Math.floor(Math.random() * 100);

        // Let's get customer's money before placing the order because, you know, we don't trust anyone
        const originalCustomerCredit = this.getCustomerCredit.execute();
        const newCustomerCredit = originalCustomerCredit - this.orderAmount;
        this.setCustomerCredit.execute(newCustomerCredit);
        
        if (this.orderAmount <= originalCustomerCredit) {
            console.log("Order placed! The order amount of " 
                + this.orderAmount 
                + " was paid with customer credit of " 
                + originalCustomerCredit
            );
            return;
        }

        // Uh-oh, not enough money!
        throw new Error("Could not place order whose amount is " 
            + this.orderAmount 
            + " because of insufficient customer credit of " 
            + originalCustomerCredit
        );

    }

    undo() {
        const currentCredit = this.getCustomerCredit.execute()
        console.log("Current credit:" + currentCredit)
        setCustomerCredit.execute(currentCredit + this.orderAmount)
    }
}

class GetCustomerCredit {
    execute() {
        return customerCredit;
    }
}

class SetCustomerCredit {
    execute(amount) {
        customerCredit = amount;
    }
}

// MAIN

const getCustomerCredit = new GetCustomerCredit();
const setCustomerCredit = new SetCustomerCredit();

const placeOrder = new PlaceOrder(getCustomerCredit, setCustomerCredit);

try {
    placeOrder.execute();
} catch (error) {
    console.log(error);
    // Customer credit update should be rollbacked
    placeOrder.undo();
    
}

console.log("Current customer credit is: " + getCustomerCredit.execute());

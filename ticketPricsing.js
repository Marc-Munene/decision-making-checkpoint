function getTicketPrice(age) {
    let price;
    if (age <= 12) {
        price = 10;
    } else if (age >= 13 && age <= 17) {
        price = 15;
    } else {
        price = 20;
    }
    return `The ticket price for age ${age} is $${price}.`;
}

// Example Test
console.log(getTicketPrice(10));  // Output: The ticket price for age 10 is $10.
console.log(getTicketPrice(15));  // Output: The ticket price for age 15 is $15.
console.log(getTicketPrice(25));  // Output: The ticket price for age 25 is $20.

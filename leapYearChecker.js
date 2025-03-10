function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return `${year} is a leap year.`;
    } else {
        return `${year} is not a leap year.`;
    }
}

// Example Test
console.log(isLeapYear(2024));  // Output: 2024 is a leap year.
console.log(isLeapYear(2100));  // Output: 2100 is not a leap year.

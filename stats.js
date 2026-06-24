// stats.js
// This program accepts integers from the user and calculates:
// Mean, Median, Count, Minimum, and Maximum.
//
// The user enters integers one at a time.
// Enter "q" to stop entering values.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [];

// Function to calculate mean
function calculateMean(arr) {
    const sum = arr.reduce((total, num) => total + num, 0);
    return sum / arr.length;
}

// Function to calculate median
function calculateMedian(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const middle = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[middle - 1] + sorted[middle]) / 2;
    }

    return sorted[middle];
}

// Function to repeatedly ask for input
function getInput() {
    rl.question("Enter an integer (or q to quit): ", (answer) => {

        // User wants to stop entering values
        if (answer.toLowerCase() === "q") {

            if (numbers.length === 0) {
                console.log("No integers were entered.");
                rl.close();
                return;
            }

            const mean = calculateMean(numbers);
            const median = calculateMedian(numbers);
            const count = numbers.length;
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);

            console.log("\nResults");
            console.log("-------");
            console.log(`Mean: ${mean}`);
            console.log(`Median: ${median}`);
            console.log(`Count: ${count}`);
            console.log(`Minimum: ${min}`);
            console.log(`Maximum: ${max}`);

            rl.close();
            return;
        }

        // Error handling: verify integer input
        const number = Number(answer);

        if (!Number.isInteger(number)) {
            console.log("Error: Please enter a valid integer.");
            getInput();
            return;
        }

        numbers.push(number);
        getInput();
    });
}

// Start program
getInput();
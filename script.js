/* ========================================================================= */
/* Part 1: JavaScript Basics                    */
/* ========================================================================= */

// Your goal here is to demonstrate variables, data types, operators, and conditionals.
// Let's create a program that checks if a user-entered number is even or odd.

// 1. Get references to the HTML elements
const numberInput = document.getElementById('numberInput');
const checkNumberBtn = document.getElementById('checkNumberBtn');
const resultOutput = document.getElementById('resultOutput');

// 2. Add an event listener to the button
checkNumberBtn.addEventListener('click', function() {
    // Get the value from the input and convert it to a number
    let number = parseInt(numberInput.value);

    // Use a conditional statement to check if the number is even or odd
    if (isNaN(number)) {
        resultOutput.textContent = 'Please enter a valid number.';
    } else if (number % 2 === 0) {
        resultOutput.textContent = `The number ${number} is even.`;
    } else {
        resultOutput.textContent = `The number ${number} is odd.`;
    }
});


/* ========================================================================= */
/* Part 2: JavaScript Functions                     */
/* ========================================================================= */

// Your goal here is to create at least two custom, reusable functions.

// 1. Create a function to calculate a total price with tax.
function calculateTotalPrice(price, taxRate) {
    const total = price + (price * taxRate);
    // This function returns a value
    return total;
}

// 2. Create another function to format a string.
function formatGreeting(name) {
    const greeting = `Hello, ${name}! Welcome to the assignment.`;
    // This function returns a value
    return greeting;
}

// Now, let's use the functions and display the results on the page.
const showCalculationBtn = document.getElementById('showCalculation');
const calculationResultEl = document.getElementById('calculationResult');

showCalculationBtn.addEventListener('click', function() {
    // Call the calculateTotalPrice function with some example values
    const finalPrice = calculateTotalPrice(50, 0.08);
    // Call the formatGreeting function
    const message = formatGreeting('JavaScript Learner');
    
    // Display the results
    calculationResultEl.innerHTML = `${message} <br> Your total price with tax is: $${finalPrice.toFixed(2)}`;
});


/* ========================================================================= */
/* Part 3: JavaScript Loops                         */
/* ========================================================================= */

// Your goal is to use loops to perform repetitive tasks.
// Let's use a 'for' loop to generate a list of numbers.

const listContainer = document.getElementById('listContainer');

// 1. Use a 'for' loop to iterate and create list items
for (let i = 1; i <= 5; i++) {
    // Create a new list item element
    const listItem = document.createElement('li');
    // Set the text content for the list item
    listItem.textContent = `List item number ${i}`;
    // Append the new list item to the unordered list
    listContainer.appendChild(listItem);
}

// 2. Use another loop (e.g., forEach) on an array.
const animals = ['Dog', 'Cat', 'Fish', 'Bird'];
console.log('--- Looping through the animals array:');
animals.forEach(function(animal) {
    console.log(`- ${animal}`);
});


/* ========================================================================= */
/* Part 4: Mastering the DOM                       */
/* ========================================================================= */

// Your goal is to demonstrate at least 3 different DOM interactions.

// Interaction 1: Toggle a class to show/hide an element.
const toggleBtn = document.getElementById('toggleBtn');
const toggleText = document.getElementById('toggleText');

toggleBtn.addEventListener('click', function() {
    // The .toggle() method is an easy way to add/remove a class
    toggleText.classList.toggle('hidden');
    
    // Change button text based on the state
    if (toggleText.classList.contains('hidden')) {
        toggleBtn.textContent = 'Show Content';
    } else {
        toggleBtn.textContent = 'Hide Content';
    }
});

// Interaction 2: Create a new element and add it to the page.
const createBtn = document.getElementById('createBtn');

createBtn.addEventListener('click', function() {
    // Create a new paragraph element
    const newParagraph = document.createElement('p');
    // Set its text content
    newParagraph.textContent = 'A new paragraph was created dynamically!';
    // Append the new element to the body
    document.body.appendChild(newParagraph);
});

// Interaction 3: Change the text content of an existing element.
// We've already done this in Part 1 and Part 2, but let's do one more.
// Let's update the header text on mouseover.
const mainHeader = document.querySelector('h1');

mainHeader.addEventListener('mouseover', function() {
    mainHeader.textContent = 'You Hovered Over the Title!';
});

mainHeader.addEventListener('mouseout', function() {
    mainHeader.textContent = 'Mastering JavaScript Fundamentals'; // Revert back
});

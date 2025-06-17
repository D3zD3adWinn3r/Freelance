/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

// Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
function createFreelancer() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
    return { name, occupation, rate };
}

// Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.


// Write a function that returns the average rate of all freelancers in state.

// Use that function to initialize a state variable which will store the average rate of all freelancers.

// Write a component function to represent a single freelancer.

// Write a component function to represent an array of freelancers.

// Write a component function to represent the average rate of all freelancers.

// Write and call a render function that will mount the application onto the document.


render();

 

// > $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());




 












































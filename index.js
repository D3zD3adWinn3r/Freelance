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


 
 $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());



// Write a function that returns a freelancer object with a randomly generated name, occupation, and rate according to the provided constants.
function createFreelancer() {
    const name = NAMES[Math.floor(Math.random() * NAMES.length)];
    const occupation = OCCUPATIONS[Math.floor(Math.random() * OCCUPATIONS.length)];
    const rate = Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) + PRICE_RANGE.min;
    return { name, occupation, rate };
}

// Initialize a state variable to an array of `NUM_FREELANCERS` freelancer objects.
const freelancers = Array.from({ length: NUM_FREELANCERS }, createFreelancer);

// Write a function that returns the average rate of all freelancers in state.
function calculateAverageRate(freelancers) {
    const totalRate = freelancers.reduce((sum, freelancer) => sum + freelancer.rate, 0);
    return totalRate / freelancers.length;
}
// Use that function to initialize a state variable which will store the average rate of all freelancers.
const averageRate = calculateAverageRate(freelancers);
// Write a component function to represent a single freelancer.
function FreelancerComponent({ name, occupation, rate }) {
    return `
        <div class="freelancer">
            <h2>${name}</h2>
            <p>Occupation: ${occupation}</p>
            <p>Rate: $${rate}/hr</p>
        </div>
    `;
}
// Write a component function to represent an array of freelancers.
function FreelancersListComponent(freelancers) {
    return `
        <div class="freelancers-list">
            ${freelancers.map(FreelancerComponent).join('')}
        </div>
    `;
}
// Write a component function to represent the average rate of all freelancers.
function AverageRateComponent(averageRate) {
    return `
        <div class="average-rate">
            <h2>Average Rate: $${averageRate.toFixed(2)}/hr</h2>
        </div>
    `;
}
// Write and call a render function that will mount the application onto the document.
function render() {
    const app = document.getElementById('app');
    if (!app) {
        console.error("App element not found");
        return;
    }
    app.innerHTML = `
        ${AverageRateComponent(averageRate)}
        ${FreelancersListComponent(freelancers)}
    `;
}

render();

// > $app.querySelector("#FreelancerRows").replaceWith(FreelancerRows());




 












































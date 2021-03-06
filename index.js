/*
DESCRIPTION:
In this challenge, you are curious about how old you would be in dog years.
You are expected to write JavaScript code that will convert any human age 
to dog years. When a user enters a human age into the calculator and pressed 
‘convert me to dog years’, the new dog years age should show up in the space 
below it.

On average, a dog’s first year on the planet worth is the equivalent of 10.5 
human years.

event listeners, getElementById, operators

*/

// Write your code here 👇
const button = document.querySelector('.button')
const input = document.querySelector('#input')
const result = document.querySelector('#result')



button.addEventListener('click', calculateAge)
input.addEventListener('keyup', e => {
    if (e.keyCode === 13) {
        e.preventDefault();
        calculateAge();
    }
})


function calculateAge() {
    let humanAge = input.value
    // Calculations:  human  1-15 = 1 cat 
    // human  16-24 = 2 cat
    //      25-28 = 3 cat
    //      28-60 = +1 for every 4 years: Math.round(3 + (input.value - 28)/4)
    
    result.innerText = 
        !humanAge || humanAge == 0 ? 0
        : humanAge <= 1 ? '1 month'
        : humanAge <= 4 ? '3 months'
        : humanAge <= 10 ? '6 months'
        : humanAge <= 15 ? 1
        : humanAge <= 24 ? 2
        : humanAge <= 28 ? 3
        : Math.round(3 + (input.value - 28)/4);
}


/*
DETAILED INSTRUCTIONS
1. pick out the neccesary elements from the HTML
2. use the input value and convert it into dog years on 'click'
3. display the result in the h1 tag
STRETCH GOALS:
- Can you convert your age into dog years, months and days? 
- Can you improve the overall design?
    [x] Change button to cat emoji
    [x] change font
    [x] change color scheme
    [] include 'calculations' graphic
- Add 'dog' radial button to switch to dog years
    repeat app for dog years
*/

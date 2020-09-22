// First we assign all our html content to variables
const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const headline = document.querySelector('.headline');

// Now we create a timeline variable which will hold the transition timeline
const timeline = new TimelineMax();

// Then we select the variable we would like to put the animation on and give the parameters of the animation

timeline.fromTo(
    hero,
    1,
    {height: '0%'},
    {height: '80%', ease: Power2.easeInOut}
).fromTo(
    hero,
    1.2,
    {width: '100%'},
    {width: '80%', ease: Power2.easeInOut}
).fromTo(
    slider,
    1.2,
    {x: '-100%'},
    {x: '0%', ease: Power2.easeInOut},
    '-=1.2'
).fromTo(
    headline,
    0.5,
    {opacity: 0, x: 30},
    {opacity: 1, x: 0},
    '-=0.5'
);


/* This is what the parameters are taking in
    1. The html element or variable associated with the element
    2. Duration of the transition
    3. Starting position
    4. Ending position... i also added an ease out transition
    5. Animation delay or in this case speed up the animation by a given amount of time
*/
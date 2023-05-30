# analog-clock
This is a sample project for building an analog clock using HTML5, CSS3 and very minimal JavaScript.

Things I have used,

1. CSS3 trigonometric functions(sin() and cos()) to place numbers around the circle.
2. CSS3 transform, transform-origin for rotating arms at the center of the clock.
3. CSS3 keyframe for animating the rotation, animation-delay to handle the passed time.
4. CSS3 variables to create and reuse a lot of values.
4. VanillaJS for translating current time into animation delay.

The key things are to understand the quadrants, how to perfectly place numbers around the circle without anyone falling outside, having the right size for arms, making it responsive, making the values configurable by using CSS variables, instantiating with the current time in page load etc.

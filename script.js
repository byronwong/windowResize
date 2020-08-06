'use strict';

// Throttling
// let delay = 250, // delay between calls
//   throttled = false, // are we currently throttled?
//   calls = 0;

// // window.resize callback function
// function getDimensions() {
//   // code to execute...
// }

// // window.resize event listener
// window.addEventListener('resize', function () {
//   // only run if we're not throttled
//   if (!throttled) {
//     // actual callback action
//     getDimensions();
//     // we're throttled!
//     throttled = true;
//     // set a timeout to un-throttle
//     setTimeout(function () {
//       throttled = false;
//     }, delay);
//   }
// });

// getDimensions();

// Debouncing
// window resize debounce
let timeout = false;
const delay = 250;

// do something once the resize has completed
function getDimensions() {
  // code to execute...
}

// window.resize event listener
window.addEventListener('resize', function () {
  // clear the timeout
  clearTimeout(timeout);
  // start timing for event "completion"
  timeout = setTimeout(getDimensions, delay);
});

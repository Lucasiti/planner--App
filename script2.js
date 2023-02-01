// research this
// {/* <script>
// $(document).ready(function(){
//  ---all events will go between these curly braces
// });
// </script> */}

// function to load the scripts after the DOM has loaded (doesn't wait for css)
$(document).ready(function(){


// * Display the current day at the top of the calender when a user opens the planner.
var today = moment();
$("#currentDay").text(today.format("Do MMMM YYYY, h:mm:ss a")); 

// when submitted prevent reload
// function dontReloadPage(event) {
//   event.preventDefault();
// }
// * Present timeblocks for standard business hours when the user scrolls down.

 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// select element by name attribute and get its value


// 9am
// retrieve input with ID of input9am
let input = document.getElementById("input9am");
// get input9 value out of local storage if stored already - under the label Task_9am
 input.value = localStorage.getItem("Task_9am");
// retrieve the button with ID saveBtn9 and store it in the variable saveButton
let saveButton = document.getElementById("saveBtn9");
// add event listener to saveButton so on click it gets the keepTask values which are the result of the keepTask function
saveButton.addEventListener("click", keepTask);
// keepTask function sets the input value to local storage and gets it from local storage if it is already stored
function keepTask() {
  localStorage.setItem("Task_9am", input.value);
   input.value = localStorage.getItem("Task_9am");
}
// clearButton will clear individual entries from local storage and the input box
let clearButton = document.getElementById("clearBtn9");
clearButton.addEventListener("click", clear)
function clear() {
  localStorage.removeItem("Task_9am");input.value="";
}


// 
let allInput = document.getElementsByTagName("input")
let allInputAmount = allInput.length;
console.log(allInputAmount)





// function for change color of row

// const hour = document.getElementsByClassName("time-block");
// let currentHour = parseInt(moment().format('H'));
// console.log(currentHour)

// timeColor.forEach(changeColor => {
//    if (currentHour === ID value) {
// make time-block row .present class
// } else if ( currentHour > ID value)
// make time-block row .future class
// } else {
// make time-block row .past class
// });



  

//   // Compares row id to current hour and sets color accordingly
//   if (currentHour === hour) {
//     document.getElementByID("input").style.backgroundColor = "#ff6961";
//   }

// }

// end of document .ready function
}
);
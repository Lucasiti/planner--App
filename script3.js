// research this
// {/* <script>
// $(document).ready(function(){
//  ---all events will go between these curly braces
// });
// </script> */}

// funtion to load the scripts after the DOM has loaded (doesn't wait for css)
$(document).ready(function(){
 
// experimental script

// retrieve input box to get user entry and h2 header that will change and store in variables
const input = document.querySelector("input");
// h2 = document.querySelector("h2");

// gets task input (which was the entered text stored in the h2 variable) from storage and keeps it as the value within the <h2> tags
input.innerHTML = localStorage.getItem("Task");

// get button element by ID "save" and store it in the saveButton variable
let saveButton = document.getElementById("save");

// addeventlistener to saveButton so when clicked it will display the entered text. The 'display' value is actually a function being called
saveButton.addEventListener("click", display);

// the display function will save the value "Task" - this can be set to any chosen name and then the input value (whatever was typed in) into local storage.
// it will then get the item back out of storage to keep it current.
function display() {
  localStorage.setItem("Task", input.value);
  input.innerHTML = localStorage.getItem("Task");
}

let clearButton = document.getElementById("clear");
clearButton.addEventListener("click", clear)
function clear() {
  localStorage.removeItem("Task");
}

// const input = document.querySelector("input");
// h2 = document.querySelector("h2");
// h2.innerHTML = localStorage.getItem("Task");

// input.addEventListener("keyup", display);

// function display() {
//   localStorage.setItem("Task", input.value);
//   h2.innerHTML = localStorage.getItem("Task");
// }



var nineAm = $("#hour-9");
var tenAm = $("#hour-10");
var elevenAm = $("#hour-11");
var twelvePm = $("#hour-12");
var onePm = $("#hour-13");
var twoPm = $("#hour-14");
var threePm = $("#hour-15");
var fourPm = $("#hour-16");
var fivePm = $("#hour-17");
var sixPm = $("#hour-18");


// * Display the current day at the top of the calender when a user opens the planner.
var today = moment();
$("#currentDay").text(today.format("Do MMMM YYYY, h:mm:ss a")); 

// when submitted prevent reload
function dontReloadPage(event) {
  event.preventDefault();
}
// * Present timeblocks for standard business hours when the user scrolls down.

 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// select element by name attribute and get its value
var inputTasks = $('#description');

var descriptionText = $('textarea[name="description"]').val();
// print to the page
inputTasks.append(descriptionText);

var descriptionText = $('textarea').val();
// print to the page
inputTasks.append(descriptionText);

// * Save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on('click', localStorage.setItem("9am", descriptionText ));

// $(".saveBtn").on('click', localStorage.setItem("hour-9", "description" ));

// * Persist events between refreshes of a page



function timeBlockColor() {
  var hour = parseInt(moment().format('H'));

  $(".time-block").each(function() {
      var currHour = parseInt($(this).attr("id"));

      // console.log(this); //each time-block

      if (currHour > hour) {
          $(this).addClass("future");
      } else if (currHour === hour) {
          $(this).addClass("present");
      } else {
          $(this).addClass("past");
      }
  })
};
timeBlockColor();







// end of document .ready function
});
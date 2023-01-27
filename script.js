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

// * Save the event in local storage when the save button is clicked in that timeblock.
$(".saveBtn").on('click', localStorage.setItem);
// * Persist events between refreshes of a page
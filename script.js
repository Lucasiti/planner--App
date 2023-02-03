
// function to load the scripts after the DOM has loaded (doesn't wait for css)
$(document).ready(function(){


  // * Display the current day at the top of the calender when a user opens the planner.
  var today = moment();
  $("#currentDay").text(today.format("Do MMMM YYYY, h:mm:ss a")); 
  
  // when submitted prevent reload
function dontReloadPage(event) {
  event.preventDefault();
}

// * Save the event in local storage when the save button is clicked in that timeblock.

var saveBtn = document.querySelectorAll("#saveBtn");
  $(saveBtn).click(function() {
  var time = $(this).siblings(".hour").text();
  var task = $(this).siblings(".description").val();

  localStorage.setItem(time, task);
  localStorage.getItem(task);

// intention was to clear all items from local storage and screen without refreshing

// this currently just clears everything from local storage
  let clearBtn = document.querySelectorAll("#clearBtn");
 var clear = $(clearBtn).click(function() {
    localStorage.removeItem(time, task);
  })
  

});


// colour coded block for past, present, future

function timeBlockColor() {
  var hour = parseInt(moment().format('H'));

  $(".time-block").each(function() {
      var currHour = parseInt($(this).attr("id"));

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



function clearInput(target){
  if (target.value== 'clear input'){
      target.value= "";
 }
}


// end of document.ready function
});
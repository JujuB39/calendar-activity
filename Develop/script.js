const moment = require("moment/moment");

$(document).ready(function() {

    //What elements do I need from HTML as soon as page loads
    var currentTime = $('#currentDay');
    var hours = $('.hour'); 
    var eventName = $('.event-name');
    var eventMessage = $('.event-message');
    var eventHour = $('.event-hour').val();
    var eventMin = $('.event-minutes');
    var title = ('#event-title');
    var description = ('#event-description');
    var submitbtn = $('#submit-btn');

    
    // Displays current time 
    function displayTime() {
        var now = moment().format("MMM DD YYYY, hh:mm:ss, A");
        currentTime.text(now);
    }
    setInterval(displayTime, 1000);
    

    // Add saveBtn to all hour Classes 
    hours.each((i, element) => {
        const button = document.createElement('button');
        button.setAttribute('class', 'saveBtn');
        button.setAttribute('data-bs-toggle', 'modal');
        button.setAttribute('data-bs-target', '#staticBackdrop');
        element.appendChild(button);
    });
  
    // Need to print event details to calendar

    function submit (name, description, hour, minutes) {
        // want to add title to eventName
            //var name = title.append(eventName)
        //want to add description to eventMessage 
           //var description = description.append(eventMessage)

var m = moment().format("h, A");

      // Each timeblock needs to be color coded 
        //Maybe an if else statement for times
        // FOR loop for each div  
           // if (moment(eventHour, 'AM' ).format("h, A").isBefore(m) {
               // .addClass('past')
           // } else if (moment(eventHour).format("h").isAfter(m) {
            // .addClass('future)
            // } else 
                    // .addClass('current)

           }
 
    
    });
    
    

    // need to import save options to local storage
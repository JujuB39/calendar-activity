$(document).ready(function() {

    //What elements do I need from HTML as soon as page loads
    var currentTime = $('#currentDay');
    var hours = $('.hour'); 
    var eventName = $('.event-name');
    var eventMessage = $('.event-message');
    var eventHour = $('.event-hour');
    var eventMin = $('.event-minutes');
    var title = ('#event-title');
    var description = ('#event-description');
    var submit = $('#submit-btn');

    
    
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
  
    // // Need to print event details to calendar

    // function printEventData (name, description) {
    //   var eventName = $('<input>').addClass('event-name').text(name);
    //   var eventDescription = $('<input>').addClass('event-description').text(description);
    
    // }
    
    

      
  
    // }
      // Each timeblock needs to be color coded 
        //Maybe an if else statement for times
        // FOR loop for each div  
            // if (moment().format(hh:mm).isBefore(hh: mm) (can put in an array string etc ) ) 
                // add class past to div 
                       // .addClass('past')
            // else if (time is in current hr)
                // add class current to div 
                //   // .addClass('current')
            // else if (time is hrs ahead)
                //add class future to divs 
                   // .addClass('future')
 
    
    
    
    // Classes I need to add 
        //past class
        //present class
        //future class 
        //saveBTN

    

    // need to import save options to local storage
});
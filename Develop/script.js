

$(document).ready(function() {

    //What elements do I need from HTML as soon as page loads
    var currentTime = $('#currentDay');
    var hours = $('.hour'); 
    var currentHour = parseInt(moment().format("H"));


    // Displays current time 
    function displayTime() {
        var now = moment().format("MMM DD YYYY, hh:mm:ss, A");
        currentTime.text(now);
    }
    setInterval(displayTime, 1000);
    

    // Add saveBtn and textarea to all hour Classes
    hours.each((i, element) => {
        const description = document.createElement('textarea')
        description.setAttribute("class", "description")
        description.setAttribute("name", "Event")
        description.setAttribute("cols", "110")
        description.setAttribute("rows", "2")
        element.appendChild(description);
        const button = document.createElement('button');
        button.setAttribute('class', 'saveBtn');
        element.appendChild(button);
    });

    //For each, function to assign colors 
    hours.each(function (hoursDiv) {
        let colorHour = parseInt(hoursDiv.id);

        // if else statements for colors 
        if (currentHour === colorHour) {
            hours.addClass("current");
        } else if ((currentHour < colorHour) && (currentHour > colorHour - 6)) {
            hours.addClass("future")
        } else if ((currentHour > colorHour) && (currentHour < colorHour + 6)) {
            hours.addClass("past")
        }

    
    })
        
});
  

    //     if (moment().isAfter("05:59 PM")) {
    //         hours.addClass('past')
    //     } else if (moment().isBefore("10 AM") & moment().isSameOrAfter("9 AM"))  {
    //         hours.addClass('future') 
    //         //except 9 hours.addClass("present")
    //     } else if (moment().isBefore("11:00 AM")) {
    //         hours.addClass('future') 
    //         // except 9 10
    //         // hours.addClass("present") 
    //     } else if (moment().isBefore("12:00 PM")) {
    //         hours.addClass('future') 
    //         // except 9 10 11
    //         //hours.addClass("present")
    //     } else if (moment().isBefore("01:00 PM")) {
    //         hours.addClass('future') 
    //         // except 9 10 11 12
    //         //hours.addClass("present")
    //     } else if (moment().isBefore("02:00 PM")) {
    //         hours.addClass('future') 
    //         // except 9 10 11 12 1
    //         //hours.addClass("present")
    //     } else if (moment().isBefore("03:00 PM")) {
    //         hours.addClass('future') 
    //         // except 9 10 11 12 1 2
    //         //hours.addClass("present")
    //     } else if (moment().isBefore("04:00 PM")) {
    //         hours.addClass('future') 
    //         // except 9 10 11 12 1 2 3
    //         //hours.addClass("present")
    //     } else if (moment().isBefore("05:00 AM")) {
    //         hours.addClass('future') 
    //         // except 9 10 11 12 1 2 3 4
    //         //hours.addClass("present")
     

    // })
 


    // Save BTN function to local storage 
    // let eventStorage = localStorage.getItem("description")

    // function saveButton() {
    //     description.textContent = localStorage.getItem('description')

      
    // }
    // button.addEventListener('click', saveButton)


    

    // need to import save options to local storage

$(document).ready(function() {

    //What elements do I need from HTML as soon as page loads
    var currentTime = $('#currentDay');
    var hours = $('.hour'); 
    var currentHour = parseInt(moment().format("H"));
    var saveEvent = $('.saved-event');

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
        const saveImg = document.createElement('img');
        saveImg.setAttribute("src", "./saveimg.jpeg");
        saveImg.setAttribute("alt", "save image");
        saveImg.setAttribute("class", "save-img");

        button.appendChild(saveImg);
        element.appendChild(button);
        var storeEvent = localStorage.getItem(`description${element.id}`);

        if (storeEvent) {
            description.value = storeEvent
        }
    });

    //For each, function to assign colors 
    hours.each(function () {
        let hour = $(this);
        let hourId = parseInt(hour.get(0).id);

        // if else statements for colors 
        if (currentHour === hourId) {
            hour.addClass("present");
        } else if (currentHour < hourId) {
            hour.addClass("future")
        } else  {
            hour.addClass("past")
        }
    })
      
      // Save BTN function to local storage 
     function saveButton() {
        var save = $(this).prev().val();
        var hourId =$(this).parent().get(0).id
        console.log(hourId)
        localStorage.setItem(`description${hourId}`, save);
        saveEvent.prepend("<p class=\"saved-event\">Your event has been saved</p>")
        setTimeout(() => saveEvent.find('p:first').remove(), 5000)
        
     }


    var saveBtn = $(".saveBtn");
    saveBtn.on('click', saveButton)


    

});
  

    
 


  

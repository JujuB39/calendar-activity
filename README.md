# Work Day Scheduler


## User Story
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria 
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist

## What I changed 
For this weeks challenge we had to create a simple calendar application that allows a user to save events for each hour of the day. The first thing I worked on was the HTML. I ensured that I had my style CSS, script JS, Moment Js, jQuery and any other styling and scripts I needed to ensure my calendar would run. After that I initially created a modal that would pop up when the save button was clicked. In that modal there was form with the event name, description, and time. I didn't realize until later that this was not needed for the assignment and instead we wanted to create a calendar application that a user can easily click into and immediately type their event onto the calendar. Before I figured this out I did implement some Javascript to get this modal working by creating elements and setting attribute to them. Once I finished this I struggled to figure out how to print the items in my form onto the page. After a little bit of searching I found a few things to help but when I looked back into the assignment, I realized that I had read the assignment incorrectly. So I scratched my modal off and went for even simpler HTML. The only thing that I included in my HTML was my container that included the work hours. I added an ID to each individual ID based off the hour they reflected. 

After this I went to work on my JavaScript. The first thing I did was gathered elements I needed for my HTML and put them into new variables in my JavaScript. Then the first thing I wanted to work was the current time display. Which was fairly simple with moment. I created a function that would gather the current time in the exact format that I wanted using the Moment JS documentation then I imported that into my current time variable so that it would print on my page. Lastly I made sure that display time was being called every second so that the time was continuosly accurate. 

Once I finished that I knew that my HTML divs that stored each our all needed a textarea as well as a save button. Instead of creating an individual one for each div, I used .each where I created a text area and a button that I could put on each div. This was super helpful and it made my HTML significantly shorter. After I completed that I knew I had to use .each once again so that I could color code my calendar. ........
**if you are looking at this after 5:00pm comment out moment().hours() on script.js line 40 and replace with a number 8-5.>**

# Calendar-App

- The application displays timeblocks for standard business hours (8 a.m. to 5 p.m.).

**\* NOTE. If you would like the app to display different hours you can change the workHrs array and all the nessassery changes will be dynamically changed>**

- Each timeblock contains an input field and save button.

- Clicking a timeblock's "Save" button stores the input text in local storage, allowing the text to persist when the application is refreshed.

- The current day is displayed at the top of the calendar.

- Each timeblock is color coded to indicate whether it is in a past, present, or future hour.

This was a challenging and rewarding project. It was probably my favorite so far.
I got the chance to really practice dynamically generating text, text areas, buttons, classes, and Ids. I was even able to increment individual id's this gave me the ability to easily store items in local storage and retrieve them. I have been struggling with if {} statements and I feel like I got to practice that a bit here.
The most challenging part was getting the moment.js time and the time block into a form that I could properly compare them. I solved this my slitting off my :00 and then parsing that string into an integer. From there I converted 1, 2, 3, 4, and 5 to military time by adding 12. This is not a perfect solution because I designed this app to be able to adjust to a different schedule by changing the hours in the array. I am quite proud of that part because if you change those hours the button, classes, and Id's will all dynamically change too without any problems. I would need a more elegant solution to convert any times to the proper base 24 time.

Things I learned well
For loops
Using an array to create unique id's within a for loop

Things that I learned need to keep working on
Local storage
If, if else, else.

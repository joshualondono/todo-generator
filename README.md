# todo-generator

## Generate a single note and log or change the parameter to make as many as you want, access infor is for the latest update only

When you run main.js you will get an array of 5 objects that are self generating todos with the note id for the object, log, and key map. They should all match and the count will reflect the log count. 
  	
~~~~ js


// Comment out code to see the log alone  with matching ids accross the object, log and key Map. All id values need to match. 

setInterval(() => console.log(generateNotes(1)), 2000)
//setInterval(() => console.log(console.log(thisWeek.log)), 2000)

// Comment out to see the log object in the array

//setInterval(() => console.log(generateNotes(1)), 2000)
setInterval(() => console.log(console.log(thisWeek.log)), 2000)

generateNotes(1) // create any amount of notes based on value amount 

GENERAL FUNCTIONS 

makeNote(note, dueIn) //create a note with 2 parameters, string input for note data and days due - will be set to 7 days only

emptyLog() // empty log array

editNote() //

saveNote() // runs makeLog()

delNote() // delete a note, empty object and remove from log, only works for current record

latestNote() // get latest note in the log

thisWeek // object





~~~~



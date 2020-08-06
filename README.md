# todo-generator

  	
~~~~ js

node main.js //get an array of 5 objects that are self generating todos with the note id for the object, log, and key map. They should all match and the count will reflect the log count. 


// Comment out code to see the log alone  with matching ids accross the object, log and key Map. All id values need to match. 

//TESTING Generate notes in the terminal to test program
setInterval(() => console.log(generateNotes(1)), 2000)
setInterval(() => console.log(console.log(thisWeek.log)), 2000)

GENERAL FUNCTIONS 

generateNotes(1) // create a sample note 

makeNote(note, dueIn) //adds to log - create a note with 2 parameters, string input for note data and days due - will be set to 7 days only

emptyLog() // empty log array

editNote() 

saveNote() // runs makeLog()

delNote() // delete a note, empty object and remove from log, only works for current record

latestNote() // get latest note in the log

thisWeek // view entire record object





~~~~



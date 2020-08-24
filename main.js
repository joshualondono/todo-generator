const thisWeek = {
  note: '',
  postDate: '',
  priority: false,
  dueDate: '',
  dueDays: 0,
  id: 0,
  suggestedBy: 'this week',
  count: 0,
  sampNotes: {action: {time: ['make time', 'take time','reserve time','set aside time','schedule time'], neg: ['avoid', 'stay away from', 'reduce']},  object: {family: ['with my mom','with my wife','with my wife and kids', 'with my parents', 'to be alone', 'with my dad', 'with the kids' ], negDiet:['sweets','candy','soda','fat','sodium','snacks']}, where: {family: ['somewhere nice and close to home', 'somewhere nice and far from home', 'in an exciting new place','somewhere nice', 'after work', 'in the morning', 'somewhere new', 'during the evening', 'in the afternoon', 'during the evening'], negDiet:['whenever possible','all week','during dinner','during breakfast','at lunch','at work','at home']}, about:{family: ['to exercise', 'to plan a family dinner','to eat out','for one on one time','to walk the dog','to go shopping', 'to watch a movie', 'for a walk in the park','to plan for a family gathering', 'for a fun trip', 'to plan a surprise party','to think about life goals','to go over future plans', 'to go over Christmas plans','to go over Thanksgiving plans','to go over family finances']}},
   log: [],
   readme: ['?This Week is an app that allows the creation of custom todo plans that auto generates family plans. Current functions'],

  set addNote(note) {
    this.note = note
    this.postDate = new Date()
    this.priority = false
    this.id = Math.random()
    this.count= this.count + 1
    this.dueDate = this.dueDateSet(this.dueDays)
    this.makeLog()

  },

  set dueIn(num){
    this.dueDays = num

  },

  makeNote: function(note, num){
    this.dueIn = num
    this.addNote = note

  },

  dueDateSet: function(num){
    return new Date(Date.parse(Date()) + 86400000 * num)

  },

  makeLog: function(){
    const obj = Object.create(thisWeek)
    obj.note = this.note
    obj.postDate = this.postDate
    obj.priority = this.priority
    obj.id = this.id
    obj.count = this.count
    obj.dueDays = this.dueDays
    obj.dueDate = this.dueDate
    this.log.push(obj)

  },

  get viewNotes(){

    const arr = []

    for(let i = this.log.length - 1; i >= this.log.length - 5; i--){
    let logObj = this.log[i]
    const obj2 = Object.create(logObj)
    obj2.note = obj2.note
    obj2.priority = obj2.priority
    obj2.postDate = obj2.postDate
    obj2.dueDate = obj2.dueDate
    arr.push(obj2)

    } return arr
  },

  editNote: function(note = this.note, priority = this.priority){
    this.note = note
    this.priority = priority
    this.log.pop()
    this.makeLog()
    return
  },

  saveNote: function(){
    this.makeLog()

  },

  delNote: function(){
    this.note = ''
    this.postDate = ''
    this.priority = false
    this.dueDate = ''
    this.dueDays = 0
    this.id = 0
    this.count = this.count - 1
    this.log.pop()
  },

  emptyLog: function(){
    this.log = [] //will add push to file
  },

  get latestNote(){
    //latest note in log
    return this.log[this.log.length - 1]

  },

  randNum: function(max) {
  return Math.floor(Math.random() * Math.floor(max));

},

  generateNote: function(num){
    let count = 0
    for(let i = 0; i < num; i++){
     count++

    const randNoteAction = this.randNum(this.sampNotes.action.time.length)
    const randNoteObject = this.randNum(this.sampNotes.object.family.length)
    const randNoteWhere = this.randNum(this.sampNotes.where.family.length)
    const randNoteAbout = this.randNum(this.sampNotes.about.family.length)

    const randNoteActionDiet = this.randNum(this.sampNotes.action.neg.length)
    const randNoteObjectDiet = this.randNum(this.sampNotes.object.negDiet.length)
    const randNoteWhereDiet = this.randNum(this.sampNotes.where.negDiet.length)

    if(i % 2 === 0){

      thisWeek.makeNote('This week ' + this.sampNotes.action.time[randNoteAction] + ' ' + this.sampNotes.object.family[randNoteObject] + ' ' + this.sampNotes.about.family[randNoteAbout] + ' ' + this.sampNotes.where.family[randNoteWhere], this.randNum(8))

    } else{
      thisWeek.makeNote('This week ' + this.sampNotes.action.neg[randNoteActionDiet] + ' ' + this.sampNotes.object.negDiet[randNoteObjectDiet] + ' ' + this.sampNotes.where.negDiet[randNoteWhereDiet], this.randNum(8))

    }



}
  },

};


//Validation testing - Under 4 records throws error, error is in viewNotes function, describe loop function when array count is under 4 records
/*
const generateNotes = function(num = 1){
thisWeek.generateNote(num) //Parameter accepts record count has bug
 const logAtIndexO = thisWeek.log[num - 1]
 //checks counter is working by comparing count to log index, if values are different dispay error
  const map1 = new Map();
  const keyMapUser = '3b7f3sbks7'
map1.set(keyMapUser, thisWeek.log);
  const keyMapUserView = map1.get(keyMapUser);

  if(thisWeek.log[thisWeek.count - 1].id === thisWeek.id && keyMapUserView[thisWeek.count - 1].id === thisWeek.id) {

    return 'ARRAY@i => ' + thisWeek.log[thisWeek.count - 1].id + ' ' + thisWeek.count + ' VIRT_OBJ@id => ' + thisWeek.id + ' ' + ' MAP_ARRAY@i => ' + keyMapUserView[thisWeek.count - 1].id + ' ACCESS_KEY@MAP => ' + keyMapUser
  } else {
    return false
  }

}
*/



const generateNotes = function(num = 1){
thisWeek.generateNote(num) //Parameter accepts record count has bug
 const logAtIndexO = thisWeek.log[num - 1]
 //checks counter is working by comparing count to log index, if values are different dispay error
  const map1 = new Map();
  const keyMapUser = '3b7f3sbks7'
map1.set(keyMapUser, thisWeek.log);
  const keyMapUserView = map1.get(keyMapUser);

  if(thisWeek.log[thisWeek.count - 1].id === thisWeek.id && keyMapUserView[thisWeek.count - 1].id === thisWeek.id) {

const output = "'" + thisWeek.log[0].note + "'" + ',' + "'" + thisWeek.log[1].note + "'" + ',' + "'" + thisWeek.log[2].note + "'" + ',' + "'" + thisWeek.log[3].note + "'" + ',' + "'" + thisWeek.log[4].note + "'"

      return output
  } else {
    return false
  }

}
//
//setInterval(() => console.log(generateNotes(1)), 2000)
//setInterval(() => console.log(console.log(thisWeek.log)), 2000)
//console.log(generateNotes(5))
//console.log(thisWeek.log)

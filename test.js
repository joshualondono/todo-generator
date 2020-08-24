document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("list").innerHTML = generateNotes(2);
}

const note = 'pass function'
const savedTodos = localStorage.getItem('mytodos');
const log = []

const getInput = function() {
  const x = document.getElementById("myText").value;
  return x
}

const testing = function(){

log.push(getInput())
localStorage.setItem('mytodos', log);

}

const addInput = function() {
  const x = document.createElement("INPUT");
  x.setAttribute("type", "text");
  x.setAttribute("value", "");
  x.setAttribute("id", "myText");
  document.body.appendChild(x);
  testing();
}

const addTodo = function() {
  const node = document.createElement("LI");
  const textnode = document.createTextNode(getInput());
  node.appendChild(textnode);

  document.getElementById('myTodos').appendChild(node);

}

function rmvTodo() {
  var list = document.getElementById("myTodos");
  list.removeChild(list.childNodes[0]);
}

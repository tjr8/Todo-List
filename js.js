// User clicked on the add button
// Add text if filled
document.querySelector('#add').addEventListener('click', function() {
  var value = document.querySelector('#item').value;
  if (value) addItemTodo(value);
});

function addItemTodo(text) {
  console.log(text);
}
// Your code goes here
document.addEventListener("DOMContentLoaded", function() {
  let load = document.getElementById('text');
  load.texContent('This is really cool!')
});

const text = document.getElementById('text');
text.addEventListener('DOMContentLoaded', function(e) {
  text.textContent = "This is really cool!";
});

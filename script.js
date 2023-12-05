// this will hide the robot choice , and will show when button is clicked 

document.getElementById('computer1').style.display = 'none';
// once french fries is cooked , if the button matches the robot(computeriv) choice ,  it will print message and display computer choice 
document.getElementById('crunchy1Button').addEventListener('click', function() {
  let thesFry = document.getElementById('crunchy1Button').innerHTML = 'French Fries';
  if (thesFry === computerDiv) {
    document.getElementById('computer1').style.display = 'block';
    alert('Good job you won Lets Eat!');
  } else {

    alert('No, I do not want that');
  }
// This is a comment

});


document.getElementById('hamburgerButton').addEventListener('click', function() {
  let thesHams = document.getElementById('hamburgerButton').innerHTML = 'Hamburger';
  if (thesHams === computerDiv) {
    document.getElementById('computer1').style.display = 'block';
    alert('Yes, you win! Lets eat !');
  } else {
    alert('Hmm, I dont want that to eat ');
  }
});

document.getElementById('saladButton').addEventListener('click', function() {
  let theSalad = document.getElementById('saladButton').innerHTML = 'Salad';
  if (theSalad === computerDiv) {
    document.getElementById('computer1').style.display = 'block';
    alert('Yes, you win! Lets eat !');
  } else {
    alert('Hmm, I dont want that to eat');
  }
});

document.getElementById('onionRingsButton').addEventListener('click', function() {
  let theOnions = document.getElementById('onionRingsButton').innerHTML = 'Onion Rings';
  if (theOnions === computerDiv) {
    document.getElementById('computer1').style.display = 'block';
    alert('Yes, you win! Lets eat !');
  } else {
    alert('Hmm, I dont want that right now');
  }
});

// this function is an array of choices that will create the computer choice and use to compare with button selection 
function computerChoice() {
  const choices = ['French Fries', 'Hamburger', 'Salad', 'Onion Rings'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];

}

// this changes the inner text of computer1 to the computer choice and displays on webpage 

const computerDiv = document.getElementById('computer1').innerText = computerChoice();

// this changes the output of the robot to orange 
document.getElementById('computer1').style.color = 'orange';

// this reloads the game once end end game button is selected 
document.getElementById('endGameButton').addEventListener('click', function() {
  location.reload();
});
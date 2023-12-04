// This is a comment this will hide the computer/robot answer and will not show until a button clicked
document.getElementById('crunchy1Button').addEventLsiterner('click',function(){
 // This is a comment create a variable for comparison for the if statement 
 let thesFry= document.getElementById('crunchy1Button').innerHTML = 'French Fries';
 if (thesFry === computerDiv) {
    document.getElementById('computer1').style.display = 'block';
    alert('Good job you won Lets Eat!');
  } else {

    alert('No, I do not want that');
  }
});
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox1.jpg') {
      myImage.setAttribute('src','images/firefox2.jpg');
    } else {
      myImage.setAttribute('src','images/firefox1.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
  localStorage.setItem('name', myName);
  myHeading.textContent = 'You will the best, ' + myName; 
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name')
  myHeading.textContent = 'You will the best, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
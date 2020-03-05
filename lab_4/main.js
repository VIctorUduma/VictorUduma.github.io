let googleImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'google.png') {
        myImage.setAttribute ('src', 'google2.png');
    } else {
        myImage.setAttribute ('src', 'google.png')
    }


}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
        setUserName();
    } else {

        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla is cool, ' + myName;

    

    }
    
}
if(!localStorage.getItem('name')) {
    setUserName();

} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}
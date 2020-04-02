const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const newImage = document.createElement('img');



const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */

   


    for (let i = 1; i <= 5; i++){
        const newImage = document.createElement('img');
        newImage.setAttribute('src', 'pics/pic' + i + '.jpeg');
        thumbBar.appendChild(newImage);
       
        
        newImage.onclick = function (){
            displayedImage.src = newImage.src;

        }
 
    }
    
    
    

/* Wiring up the Darken/Lighten button */
btn.onclick = function(){

    let bClass = btn.getAttribute('class');
    if ( bClass == "dark") {
        btn.setAttribute('class', 'light');
        btn.innerHTML = 'lighten';
        overlay.style.backgroundColor = "rgba(0,0,0,0.5)";
   
    }
       else {
           btn.setAttribute('class', 'dark')
           btn.innerHTML = 'darken';
           overlay.style.backgroundColor = 'rgba(0,0,0,0)';
           

       }

    };



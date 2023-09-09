var tabLinks= document.getElementsByClassName("tab-links")
var tabContents= document.getElementsByClassName("tab-contents")

function opentab(tabname){
  for(tablink of tabLinks){
      tablink.classList.remove("active-link");
  }
  
  for(tabcontent of tabContents){
      tabcontent.classList.remove("active-tab");
   }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
  
}



var sideMenu = document.getElementById("side-menu")

function openMenu(){
    sideMenu.style.right="0"
}

function closeMenu(){
    sideMenu.style.right="-200px"
}

function submitForm(){
 
}


const button = document.getElementsByClassName('btn');

// Function to execute after the timeout
function delayedFunction() {
 
    // Event listener for button click
    button.addEventListener('click', () => {
        // Set a 2-second (2000 milliseconds) delay before executing the function
        setTimeout(delayedFunction, 2000);
});

}



const scriptURL = 'https://script.google.com/macros/s/AKfycbwU1H2eaz13jgR0o9sWuGkn8Gz6x5QQ-tLiwlwVqbyMBIkAeZy6kGUMtFGuSM4-h9rt/exec'

const form = document.forms['submit-to-google-sheet']

const msg= document.getElementById('msg')

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML= "Message Sent Successfully!"
        setTimeout(function(){
            msg.innerHTML= ""
        }, 3000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
})

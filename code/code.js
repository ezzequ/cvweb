window.addEventListener('load', main);

function main() {
addEventListenersMain()
copyTextOnClick()
}

function addEventListenersMain() {
  let email = document.getElementById("copyEmail");
  email.addEventListener('click', copyTextOnClick)
    
}


function openArt(){
 document.getElementById("artdropdown-delay-top").style.transitionDelay = "0.4s"
 
 
 document.getElementById("artdropdown").style.height = ("100%")
 document.getElementById("artdropdown-delay-top").style.height = ("100%")

 if (( document.getElementById("artdropdown").style.width = ("0%")) && (document.getElementById("artdropdown-delay-top").style.width = ("0%") )){
    document.getElementById("artdropdown").style.width = ("100%")
    document.getElementById("artdropdown-delay-top").style.width = ("100%")


}
 

}


/**
 * function to make a curtain dropdown that makes it look like 2 drops
 * 
 */

function closeArt(){
    document.getElementById("artdropdown-delay-top").style.transitionDelay = "0.1s"
 
 
    document.getElementById("artdropdown").style.width = ("0%")
    document.getElementById("artdropdown-delay-top").style.width = ("0%")

    if (( document.getElementById("artdropdown").style.height.transitionDelay = ("100%") ) && (document.getElementById("artdropdown-delay-top").style.height = ("100%") )){
        document.getElementById("artdropdown").style.height = ("0%")
        document.getElementById("artdropdown-delay-top").style.height = ("0")


    }

    
}

  
 
/**
 *
 *
 * @this makeItBigNow
 * @todo makes the clicked image bigger
 * 
 */
function makeItBigNow(x){
        let pickedImage = document.getElementById(x)      
        let ShowImage = document.getElementById("makeItBigNow")
       
        ShowImage.src = pickedImage.src
       
        
}

/**
 * 
 * @this copyTextOnClick
 *
 * @function copeTextOnClick
 * @return {Promise<string>} The text thats been copied.
 * 
 */
function copyTextOnClick (){
 let email = document.getElementById("emailDOM");
 navigator.clipboard.writeText(email.value);
 email.focus()
 navigator.clipboard.readText(email.value)
  console.log(email.value)
}


  
   


   



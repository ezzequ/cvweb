window.addEventListener('load' , education)

function education(){
addEventListnersEducation()
unfold()

}

function addEventListnersEducation(){
    

    


}
/**
 * 
 * @param {HTMLelement} x 
 */
function unfold(){
    
  let divs =  document.getElementsByClassName("educationgrow");
  for ( let div of divs ){ 
   

   div.addEventListener('click', function(){
       div.style.animationPlayState = "running";
    
       

    
   })
   
  }
  console.log(divs)
  console.log(text)
  }


  document.querySelector("body > bgrid > div > div:nth-child(1) > p")
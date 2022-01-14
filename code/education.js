window.addEventListener('load' , education)

function education(){
addEventListnersEducation()
unfold()

}

function addEventListnersEducation(){
    

    


}
/**
 * 
 * function to make the divs unfold when you press them
 */
function unfold(){
    
  let divs =  document.getElementsByClassName("grow");
  for ( let div of divs ){ 
   

   div.addEventListener('click', function(){
       div.style.animationPlayState = "running";
    
       

    
   })
   
  }
  console.log(divs)
  
  }
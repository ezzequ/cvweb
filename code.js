function test(){
    const testa = document.getElementById("test")
    testa.innerHTML ="test"
}

function testBort(){
    const testa = document.getElementById("test")
    testa.style.display= null
    const blind = document.getElementById("blind")
    blind.style.display= null
    const blind2 = document.getElementById("blind2")
    blind2.style.display= null
}

function testVisa(){
    const testa = document.getElementById("test")
    testa.style.display= "none"
    const blind = document.getElementById("blind")
    blind.style.display= "block"
    const blind2 = document.getElementById("blind2")
    blind2.style.display= null
}

function testVisa2(){
    const testa = document.getElementById("test")
    testa.style.display= "none"
    const blind = document.getElementById("blind")
    blind.style.display= null
    const blind2 = document.getElementById("blind2")
    blind2.style.display= "block"
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

function closeArt(){
    document.getElementById("artdropdown-delay-top").style.transitionDelay = "0.1s"
 
 
    document.getElementById("artdropdown").style.width = ("0%")
    document.getElementById("artdropdown-delay-top").style.width = ("0%")

    if (( document.getElementById("artdropdown").style.height.transitionDelay = ("100%") ) && (document.getElementById("artdropdown-delay-top").style.height = ("100%") )){
        document.getElementById("artdropdown").style.height = ("0%")
        document.getElementById("artdropdown-delay-top").style.height = ("0")


    }

    
}

// function makeImageBig(x){
//    const images = document.querySelector("#artdropdown-delay-top > div > div.allpics")

// }

// function makeItBigNow(x){
//    let pickedImage = document.getElementById(x).getAttribute('src')
//    let pickedImageAlt = document.getElementById(x).getAttribute('alt')
   


//    document.getElementById("makeItBigNow").getAttribute('src').innerHTML = pickedImage
//    document.getElementById(x).getAttribute('alt').innerHTML = pickedImageAlt
//    console.log(pickedImage, pickedImageAlt)

// }

// function makeItBigNow(x){
//     let pickedImage = document.getElementById(x).outerHTML
//     let ShowImage = document.getElementById("makeItBigNow")
   
//     ShowImage.outerHTML = pickedImage
 
// 



    // function makeItBigNow(x){
    //     let pickedImage = document.getElementById(x).outerHTML
        
    //     let ShowImage = document.getElementById("makeItBigNow")
       
    //     ShowImage.outerHTML = pickedImage
     
    // }

  



 



function makeItBigNow(x){
        let pickedImage = document.getElementById(x)      
        let ShowImage = document.getElementById("makeItBigNow")
       
        ShowImage.src = pickedImage.src
       
        
}


// function makeItBigNow(x){
//     let pickedImage = document.getElementById(x)      
//     let ShowImage = document.getElementById("makeItBigNow")
   
//     ShowImage = pickedImage
//     for (var i = 0; i < imagesArray.length; i++) {
//         imagesArray[i].addEventListener("click",makeItBigNow())
//         (i).addEventListener('click', makeItBigNow)
//     } 
    
// }

// let imagesDOM = document.querySelectorAll("#artdropdown-delay-top > div > div.allpics > div.images >img")
// let imagesArray = Array.from(imagesDOM)

// console.log(imagesArray)


// function makeItBigNow(x){
// for (var i = 0; i < imagesArray.length; i++) {
//         imagesArray[i].addEventListener("click",makeItBigNow(x))
//         imagesArray.addEventListener('click', makeItBigNow)
//     } 

//     let pickedImage = document.getElementById(x)      
//     let ShowImage = document.getElementById("makeItBigNow")
//     ShowImage = pickedImage
// }


// function makeItBigNow(x){
// for (var i = 0; i < imagesArray.length; i++) {
//         imagesArray[i].addEventListener("click", makeItBigNow(x))
//         imagesArray.addEventListener('click', makeItBigNow)
//     } 

//     let pickedImage = document.getElementById(x)      
//     let ShowImage = document.getElementById("makeItBigNow")
//     ShowImage = pickedImage
// }

     


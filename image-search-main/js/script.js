
"use strict"

let API_KEY="NDsRm91617Fq8Bs545B3PFukf8fek4v8qwhBR9ifqoddsFJa5mCgT8m0";
let display_images =document.querySelector(".display_images")
let input =document.querySelector(".input")
let errors=document.querySelector(".alert")
let btn =document.querySelector(".search_btn")


let searchText= ""

async function defaultPhoto(){
    const request = await fetch("https://api.pexels.com./v1/curated",{
        method:"GET",
        headers: {
            Accept:"aplication/json",
            Authorization:API_KEY,        
        },
    });
   

    const data= await request.json()
 
   

    displayImage(data)

}


    function displayImage(images){
        images.photos.forEach(image => {
            let PhotoDiv= document.createElement('div');
            PhotoDiv.innerHTML=`
            <img class="image" src="${image.src.large}" >
        <h3> 
        Photographer: ${image.photographer} </h3>
        <h3>id:  ${image.photographer_id} </h3>
        <h3> ${image.liked} </h3>
             
            `
            display_images.append(PhotoDiv)


            
        });
    }
  
    
    async function SearchPhoto(query){
        const request =await fetch(`https://api.pexels.com./v1/search?query=${query}`,{
            method:"GET",
            headers: {
                Accept:"aplication/json",
                Authorization: API_KEY,        
            }
        });
   

        const data= await request.json();

        displayImage(data)
    }

        
          input.addEventListener("input",  (e)=>{
          searchText=e.target.value

    
    }
    )

    btn.addEventListener("click", ()=>{
        if(input.value==""){
            errors.textContent=" Plase enter some text..."
         }else{
            clear()
            errors.textContent= ""
            SearchPhoto(searchText)
         }    
    })

    function clear(){
        display_images.innerHTML= ""
    }
    defaultPhoto()

      


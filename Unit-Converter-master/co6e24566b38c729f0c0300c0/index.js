/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const btnEl=document.getElementById("btn-el")
const lengthDiv=document.getElementById("length-string")
const volumeDiv=document.getElementById("volume-string")
const massDiv=document.getElementById("mass-string")
const inputEl=document.getElementById("input-el")

let input


btnEl.addEventListener("click",function(){
    lengthDiv.textContent=" "
    volumeDiv.textContent=" "
    massDiv.textContent=" "
    
    input= inputEl.value
    lengthDiv.textContent=" "
    
   
    //lengthDiv.innerHTML=" "
  if(inputEl.value != 0) {
  //inputEl.value=" "
  lengthConversion()
  volumeConversion()
  massConversion()

   }

})

function lengthConversion(){
  
   let feet= (input*3.281).toFixed(3)
   let meter= (input/3.281).toFixed(3)
 
 let   lengthString= `
   <li> ${input} meters =  ${feet}  feet |  ${input}  feet =   ${meter}  meters </li>
                `
   
 lengthDiv.innerHTML+= lengthString
  
}

function volumeConversion(){
    
    let volumeString=""
    let gallon= (input*0.264).toFixed(3)
    let liter=(input/0.264).toFixed(3)
  
    volumeString=`
    <li>${input} liters = ${gallon} gallons | ${input} gallons = ${liter} liters </li>
                `  
    
    volumeDiv.innerHTML+=volumeString
}

function massConversion(){
    
    let massString=""
    let pound= (input*2.204).toFixed(3)
   
    let kilogram=(input/2.204).toFixed(3)
  
    massString=`
    <li>${input} kilograms = ${pound} pounds | ${input} pounds = ${kilogram} kilograms </li>
            `
    massDiv.innerHTML+=massString
  
}

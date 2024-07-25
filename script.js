let myfunction = ()=>{
    let clock = new Date()

    let hours = clock.getHours()
    let minutes = clock.getMinutes()
    let secundes = clock.getSeconds()

    let h1 =document.querySelector('h1')

    h1.textContent = `${hours}:${minutes}:${secundes}`

   

}
setInterval(function(){
   myfunction()
},1000)
    
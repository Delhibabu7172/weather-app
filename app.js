async function getweatherdata()
{
      try{
         let input=document.getElementById("search").value;
         let temper=document.getElementById("temp")
         let head=document.getElementById("head")
         let humi=document.getElementById("humidity")
         let win=document.getElementById("wind")
         let img=document.getElementById("image")
         let data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&units=Metric&appid=020ac31ecf3b82c081d818fd371fc20e`)
         console.log(data);
         data=await data.json() 
         console.log(data);
         temper.innerHTML=Math.round(data.main.temp)+"°c";
         head.innerHTML=data.name;
         humi.innerHTML=data.main.humidity+"%";
         win.innerHTML=data.wind.speed+"km/h";
        
         let weatherImg=data.weather[0].main;
         switch (weatherImg)
         {
          case"Clouds":img.src="./images/clouds.png" ;
          break;
          case"Clear":img.src="./images/clear.png" ;
          break;
          case"Drizzle":img.src="./images/drizzle.png" ;
          break;
          case"Mist":img.src="./images/mist.png" ;
          break;
          case"Rain":img.src="./images/rain.png" ;
          break;
          case"Snow":img.src="./images/snow.png" ;
          break;
         }
         document.getElementById("condition").style.display="block"
         document.getElementById("error").style.display="none"
        }

   catch(err){
      document.getElementById("error").style.display="block"
      document.getElementById("condition").style.display="none"
   }
}

let btn=document.getElementById("btn")

btn.addEventListener("click",getweatherdata)

let inputfield=document.getElementById("search")
inputfield.addEventListener("keypress",(e)=>{
   if (e.key === "Enter") {
      getweatherdata()
   }
})


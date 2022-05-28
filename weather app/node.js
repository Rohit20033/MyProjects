document.querySelector("#btn").addEventListener("click",findweather)
var show = document.querySelector("#show")
var num=7
function findweather(){
     var city = document.querySelector("#weather").value
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=860544db51b4368b66b90ebe782777c6`

    // const url =`api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&cnt=${}&appid=860544db51b4368b66b90ebe782777c6`
     
    // const url = `api.openweathermap.org/data/2.5/forecast/daily?q=${city}&cnt=${num}&appid=860544db51b4368b66b90ebe782777c6`
    

    async function check(){
       
        var res =  await fetch(url)
        var data = await res.json() 
          append(data)
        console.log(data)
    }
    check()

    var arr=[]
    function append(data){
        show.innerHTML=""
        console.log(data)
       arr.push(data)

       arr.forEach(function(ele){

        var div=document.createElement("div")

        var h1=document.createElement("h1")
          h1.innerText= `City:${ele.name}`
        var h3=document.createElement("h3")
        h3.style.color="orange"
        h3.innerText=`temp: ${ele.main.temp}`

        var h32=document.createElement("h3")
        h32.style.color="red"
        h32.innerText=`Max-temp: ${ele.main.temp_max}`

        var h33=document.createElement("h3")
        h33.style.color="blue"
        h33.innerText=`Min-temp: ${ele.main.temp_min}`

        var h34=document.createElement("h3")
        h34.innerText=`Sunrise: ${ele.sys.sunrise}`

        
        var h35=document.createElement("h3")
        h35.innerText=`Sunset: ${ele.sys.sunset}`



        div.append(h1,h3,h32,h33,h34,h35)
        show.append(div)
        var iframe = document.querySelector("#gmap_canvas")
        iframe.src=`https://maps.google.com/maps?q=${ele.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`

       })
        

    }
  
   


}

// function getLocationWeather() {
//     navigator.geolocation.getCurrentPosition(success);
//     function success(position) {
//       const latitude = position.coords.latitude;
//       const longitude = position.coords.longitude;
//       findweather(latitude,longitude)

//       console.log(latitude);
//       console.log(longitude);
//     }
//   }
//   getLocationWeather()
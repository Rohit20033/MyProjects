
var api = "860544db51b4368b66b90ebe782777c6"

document.querySelector("#btn").addEventListener("click",forcast)
  var nextd = document.querySelector("#nextd")
  var nextd2 = document.querySelector("#nextd2")
  var nextd3= document.querySelector("#nextd3")
  var nextd4 = document.querySelector("#nextd4")
  var nextd5 = document.querySelector("#nextd5")
  var nextd6 = document.querySelector("#nextd6")
  var nextd7 = document.querySelector("#nextd7")
 var currday = document.querySelector("#currday")
 var show=document.querySelector("#show")
function forcast(){

 var city = document.querySelector("#forcast").value
  
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=860544db51b4368b66b90ebe782777c6`
 ).then(function(res){
     
    return res.json()
 }).then(function(data){
    //  console.log(data)

     var lat = data.coord.lat;
     var long = data.coord.lon;
     fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=hourly,alerts,minutely&appid=${api}`).then(function(res){
         return res.json()
     }).then(function(data){
          
          append(data)
          console.log(data.daily)
     })
 })

}
 
var arr=[]
var arr1=[]
var arr2=[]
var arr3=[]
var arr4=[]
var arr5=[]
var arr6=[]
var arr7=[]


function append(data){
    
    
    arr.push(data.daily[0])
    arr1.push(data.daily[1])
    arr2.push(data.daily[2])
    arr3.push(data.daily[3])
    arr4.push(data.daily[4])
    arr5.push(data.daily[5])
    arr6.push(data.daily[6])
    arr7.push(data.daily[7])
    //  console.log(arr)
    
    
    arr.forEach(function(ele){
        currday.innerHTML=""
      var div = document.createElement("div")

      var h3 = document.createElement("h3")
      h3.innerText=`Day : ${ele.feels_like.day}`
      

      var h31 = document.createElement("h3")
      h31.innerText=`Evening  :${ele.feels_like.eve}`
      

      var h32 = document.createElement("h3")
      h32.innerText=`Morning  :${ele.feels_like.morn}`
    
      var h33 = document.createElement("h3")
      h33.innerText=`Night :${ele.feels_like.night}`

      var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        // console.log(filter)
        h34.innerText=`Weather :${filter}`

        var h1 = document.createElement("h1")
        const d = new Date();
        d.setDate(d.getDate());
         var day =(d.getDay())
            
         
         if(day==0){
            h1.innerText="Sunday"
        }
        else  if(day==1){
           h1.innerText="Monday"
       }
       else  if(day==2){
           h1.innerText="Tuesday"
       }
       else if(day==3){
           h1.innerText="Wednesday"
       }
       else  if(day==4){
           h1.innerText="Thursday"
       }
       else  if(day==5){
           h1.innerText="Friday"
       }
       else  if(day==6){
           h1.innerText="Saturday"
       }
        
        
      var image = document.createElement("img")
     
       if(filter=="Clouds"){
        image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
       }
       else if(filter=="Rain"){
           image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
       }
       else if(filter =="Clear"){
           image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
       }
    
    

      div.append(h1,image,h3,h31,h32,h33,h34)
      currday.append(div)

    })
    
    arr1.forEach(function(ele){
        nextd.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
    
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
        
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
        
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`

        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`

        var h1 = document.createElement("h1")
       
        const e= new Date();
        e.setDate(e.getDate()+1);
        day2=(e.getDay())
         
         if(day2==0){
            h1.innerText="Sunday"
        }
        else  if(day2==1){
           h1.innerText="Monday"
       }
       else  if(dayday2==2){
           h1.innerText="Tuesday"
       }
       else if(day2==3){
           h1.innerText="Wednesday"
       }
       else  if(day2==4){
           h1.innerText="Thursday"
       }
       else  if(day2==5){
           h1.innerText="Friday"
       }
       else  if(day2==6){
           h1.innerText="Saturday"
       }
        
        var image = document.createElement("img")
       
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd.append(div)
  
      })
      arr2.forEach(function(ele){
        nextd2.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
       
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
        
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
        
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`

        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`

        var h1=document.createElement("h1")
            const f= new Date();
            f.setDate(f.getDate()+2);
            var day=(f.getDay())

           
             
             if(day==0){
                h1.innerText="Sunday"
            }
            else  if(day==1){
               h1.innerText="Monday"
           }
           else  if(day==2){
               h1.innerText="Tuesday"
           }
           else if(day==3){
               h1.innerText="Wednesday"
           }
           else  if(day==4){
               h1.innerText="Thursday"
           }
           else  if(day==5){
               h1.innerText="Friday"
           }
           else  if(day==6){
               h1.innerText="Saturday"
           }
            
        var image = document.createElement("img")
       
        
         
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd2.append(div)
  
      })
      arr3.forEach(function(ele){
        nextd3.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
        
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
        
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
        
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`

        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`

        
        var h1=document.createElement("h1")
            const f= new Date();
            f.setDate(f.getDate()+3);
            var day=(f.getDay())

           
             
             if(day==0){
                h1.innerText="Sunday"
            }
            else  if(day==1){
               h1.innerText="Monday"
           }
           else  if(day==2){
               h1.innerText="Tuesday"
           }
           else if(day==3){
               h1.innerText="Wednesday"
           }
           else  if(day==4){
               h1.innerText="Thursday"
           }
           else  if(day==5){
               h1.innerText="Friday"
           }
           else  if(day==6){
               h1.innerText="Saturday"
           }
            
        var image = document.createElement("img")
       
          
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd3.append(div)
  
      })

      arr4.forEach(function(ele){
        nextd4.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
       
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
        
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
        
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`

        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`
        
        var h1=document.createElement("h1")
        const f= new Date();
        f.setDate(f.getDate()+4);
        var day=(f.getDay())

       
         
         if(day==0){
            h1.innerText="Sunday"
        }
        else  if(day==1){
           h1.innerText="Monday"
       }
       else  if(day==2){
           h1.innerText="Tuesday"
       }
       else if(day==3){
           h1.innerText="Wednesday"
       }
       else  if(day==4){
           h1.innerText="Thursday"
       }
       else  if(day==5){
           h1.innerText="Friday"
       }
       else  if(day==6){
           h1.innerText="Saturday"
       }
        
        
        var image = document.createElement("img")
       
        
      
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd4.append(div)
  
      })

      arr5.forEach(function(ele){
        nextd5.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
        
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
       
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
        
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`
        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`

        var h1=document.createElement("h1")
        const f= new Date();
        f.setDate(f.getDate()+5);
        var day=(f.getDay())

       
         
         if(day==0){
            h1.innerText="Sunday"
        }
        else  if(day==1){
           h1.innerText="Monday"
       }
       else  if(day==2){
           h1.innerText="Tuesday"
       }
       else if(day==3){
           h1.innerText="Wednesday"
       }
       else  if(day==4){
           h1.innerText="Thursday"
       }
       else  if(day==5){
           h1.innerText="Friday"
       }
       else  if(day==6){
           h1.innerText="Saturday"
       }
        
        var image = document.createElement("img")
       
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
      
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd5.append(div)
  
      })
      arr6.forEach(function(ele){
        nextd6.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
      
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
      
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
       
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`
        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`

        var h1=document.createElement("h1")
        const f= new Date();
        f.setDate(f.getDate()+6);
        var day=(f.getDay())

       
         
         if(day==0){
            h1.innerText="Sunday"
        }
        else  if(day==1){
           h1.innerText="Monday"
       }
       else  if(day==2){
           h1.innerText="Tuesday"
       }
       else if(day==3){
           h1.innerText="Wednesday"
       }
       else  if(day==4){
           h1.innerText="Thursday"
       }
       else  if(day==5){
           h1.innerText="Friday"
       }
       else  if(day==6){
           h1.innerText="Saturday"
       }
        
        var image = document.createElement("img")
       
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
      
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd6.append(div)
  
      })
      arr7.forEach(function(ele){
        nextd7.innerHTML=""
        var div = document.createElement("div")
  
        var h3 = document.createElement("h3")
        h3.innerText=`Day : ${ele.feels_like.day}`
        
  
        var h31 = document.createElement("h3")
        h31.innerText=`Evening  :${ele.feels_like.eve}`
        
  
        var h32 = document.createElement("h3")
        h32.innerText=`Morning  :${ele.feels_like.morn}`
        
        var h33 = document.createElement("h3")
        h33.innerText=`Night :${ele.feels_like.night}`
        var h34 =document.createElement("h3")
        var main = ele.weather
        // console.log(main)
       var filter= main.map(function(ele){
            return ele.main
        })
        console.log(filter)
        h34.innerText=`Weather :${filter}`
        

        var h1=document.createElement("h1")
        const f= new Date();
        f.setDate(f.getDate()+7);
        var day=(f.getDay())

       
         
         if(day==0){
            h1.innerText="Sunday"
        }
        else  if(day==1){
           h1.innerText="Monday"
       }
       else  if(day==2){
           h1.innerText="Tuesday"
       }
       else if(day==3){
           h1.innerText="Wednesday"
       }
       else  if(day==4){
           h1.innerText="Thursday"
       }
       else  if(day==5){
           h1.innerText="Friday"
       }
       else  if(day==6){
           h1.innerText="Saturday"
       }
        
        var image = document.createElement("img")
       
        if(filter=="Clouds"){
            image.src="https://c.tenor.com/438H6u87JfsAAAAC/sky-clouds.gif"
           }
           else if(filter=="Rain"){
               image.src="https://content.presentermedia.com/content/animsp/00016000/16585/rain_flatcolor_image_300_wht.gif"
           }
           else if(filter =="Clear"){
               image.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybtS2wpBxHKV9fZJYOe6AFbtelzcF4yg4Gp4ZFQhS3fotJyRFrJC6bXO-K56FG9C6TJw&usqp=CAU"
           }
      
      
      
  
        div.append(h1,image,h3,h31,h32,h33,h34)
        nextd7.append(div)
  
      })
   
   
   
   
   
}











// var dayarr=[]
// const d = new Date();
// d.setDate(d.getDate());
// dayarr.push(d.getDay())


// const e= new Date();
// e.setDate(e.getDate()+1);
// dayarr.push(e.getDay())


// const f= new Date();
// f.setDate(f.getDate()+2);
// dayarr.push(f.getDay())


// const g= new Date();
// g.setDate(g.getDate()+3);
// dayarr.push(g.getDay())


// const h= new Date();
// h.setDate(h.getDate()+4);
// dayarr.push(h.getDay())


// const i= new Date();
// i.setDate(i.getDate()+5);
// dayarr.push(i.getDay())


// const j= new Date();
// j.setDate(j.getDate()+6);
// dayarr.push(j.getDay())


// const k= new Date();
// k.setDate(k.getDate()+7);
// dayarr.push(k.getDay())
 



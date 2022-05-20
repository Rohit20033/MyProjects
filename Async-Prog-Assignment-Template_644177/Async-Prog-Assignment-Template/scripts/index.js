

function show(){
    var contain = document.querySelector("#slideshow")
    let imageData=[
        "https://wallpaperaccess.com/full/645141.jpg",
        "https://w0.peakpx.com/wallpaper/156/622/HD-wallpaper-avengers-endgame-all-characters-superheroes-movies.jpg",
        "https://m.media-amazon.com/images/M/MV5BNTYxOTYyMzE3NV5BMl5BanBnXkFtZTcwOTMxNDY3Mw@@._V1_.jpg"
   ]
   console.log(imageData)
   let i=0

   setInterval(function(){
       if(i==imageData.length){
           i=0
       }
      let image=imageData[i]
      console.log(i)
      contain.innerHTML=""
      let img=document.createElement("img")
      img.src=image
      img.style.width="100%"
      
      contain.append(img)
      i++
   },3000)
}
show()


  
 
 









var moviesData=JSON.parse(localStorage.getItem("moviedata")) || []
console.log(moviesData)

function sortbyrating(){
  var value=  document.querySelector("#select").value

  if(value=="Low-High"){
      moviesData.sort(function(a,b){
        return a.IMBd-b.IMBd
      })
      displaydata(moviesData)
  }

  else if(value=="High-Low"){
    moviesData.sort(function(a,b){
        return b.IMBd-a.IMBd
      })
      displaydata(moviesData)
  }
 
}
displaydata(moviesData)

 
function displaydata(data){
    document.querySelector("#movies").innerHTML=""
    data.forEach(function(ele){
  
        var div = document.createElement("div")
    
        var h2=document.createElement("h2")
         h2.innerText= ele.name
        var img = document.createElement("img")
        img.src=ele.link
    
        var p=document.createElement("p")
        p.innerText=ele.IMBd
    
        div.append(img,h2,p)
        document.querySelector("#movies").append(div)
    })
}



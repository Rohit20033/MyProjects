var id;
 
var focu = document.querySelector("#varry")
var movies = document.querySelector("#movies")
var sm = document.querySelector("#selectedmovies")



// var img1 = document.querySelector("#img1")

 focu.addEventListener("focus",function(){
    
    movies.style.opacity="1"
 })
 focu.addEventListener("blur",function(){
    
    movies.style.opacity="0"
 })
  
  async function search(q){
    try{
        const url = `http://www.omdbapi.com/?s=${q}&apikey=fc2f85ff`
        var res = await fetch(url)
    var data = await res.json()
    return data.Search;
    }catch(err){
     consoel.log(err)
    }
  }



 
  function append(movieData){
     movies.innerHTML=""
     if( movieData == undefined){
          return false;
     }
    
     movieData.forEach(function(ele){
    
      var div = document.createElement("div")
      div.style.display="flex"
      div.setAttribute("id","lowwerdiv")

      div.addEventListener("click",function(){
      collectdata(ele.imdbID)
          
      })
     
      

      var p=document.createElement("p")
      p.innerText=ele.Title
      p.setAttribute("id",`pi`)
      var image = document.createElement("img")
      image.src=ele.Poster

      div.append(image,p)
      movies.append(div)
  

     })

  }

//   async function onedata(ele){
        
//     var res = await fetch(ele)

//     // var data = await data.json()
    
//   }


    
     async function main(){
       
    var val = document.querySelector("#varry").value
       
    var x=search(val)
    var data = await x
    console.log(data)
    append(data)
}

 function debouncing(func,time){

    if(id){
      clearTimeout(id)
    }

  id =  setTimeout(function(){
         func()
    },time)
 }

 async function collectdata(id){
    
   try{
      const url_id = `http://www.omdbapi.com/?i=${id}&apikey=fc2f85ff`
      var res = await fetch(url_id)
      var data = await res.json()
      append2(data)
     
   }catch(err){
     console.log(err)
   }
 }
 var arr2=[]
 function append2(selm){
    sm.innerHTML=""
   arr2.push(selm)
    console.log(arr2)

    arr2.forEach(function(ele){
       
    var div = document.createElement("div")

    var image = document.createElement("img")
    image.src=ele.Poster
    image.setAttribute("id",`image`)

    var h1 = document.createElement("h1")
    h1.innerText=ele.Title

    var p = document.createElement("p")
    p.innerText=ele.Plot

    var h3=document.createElement("h3")
      if(ele.imdbRating>=8){
         h3.innerText=ele.imdbRating
         h3.style.backgroundColor="green"
         
      }
      else if(ele.imdbRating<=4){
         h3.innerText=ele.imdbRating
         h3.style.backgroundColor="red"
        
      }
      else if(ele.imdbRating>4&&ele.imdbRating<8) {
         h3.innerText=ele.imdbRating
         h3.style.background="orange"
         
      }
    div.append(image,h1,p,h3)
    sm.append(div)
    })

 }
document.querySelector("#btn").addEventListener("click",showmovie)
var show = document.querySelector("#show")
var gif = document.querySelector("#gif")
function showmovie(){

    let value = document.querySelector("#movies").value
     
    const url = `https://www.omdbapi.com/?t=${value}&apikey=fc2f85ff`
     
    async function check(){

       try{

        var res = await fetch(url)

        var movie = await res.json()
         
        if(movie.Response==="False"){
              showerror()
        }
        else{
            append(movie)
        }
        
       
       }catch(error){

       }
    }
    check()

    
    var arr=[]
    function append(data){
        
        
        // console.log(data)
        arr.push(data)
       

   
     
    // console.log(imdb)
        arr.forEach(function(ele){
         document.querySelector("#show").innerHTML=""
               
        
            var div=document.createElement("div")
        
            var image=document.createElement("img")
            image.src=ele.Poster
      
            var h1 = document.createElement("h1")
            h1.innerText=ele.Title
      
            var h3=document.createElement("h3")
            h3.innerText=ele.Genre
      
            var p =document.createElement("p")
            p.innerText=ele.Released
      
            var p1=document.createElement("p")
            p1.innerText=ele.Language

                
             var h32 = document.createElement("h3")
             var imbd=arr.map(function(ele){
                return ele.imdbRating 
                  })
                //  console.log(imbd)
                 if(imbd>=8.5){
                     h32.innerText=`Recommended:${imbd}.Rating`
                     h32.style.backgroundColor="gold"
                     h32.style.color="black"
                     h32.style.width="250px"
                     h32.style.marginLeft="180px"

                 }
                //  if(arr.Response ===False){
                //     gif.src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"
                // }
               
             
             
    
            div.append(image,h1,h3,p,p1,h32)
            show.append(div)
        })
        
    
        
    }  
}

function showerror(){
     show.innerHTML=""
    var img2 = document.createElement("img")
    img2.src="https://i.makeagif.com/media/11-04-2015/mfnzwt.gif"

    show.append(img2)
}


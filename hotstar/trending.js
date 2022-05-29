const url = `https://api.themoviedb.org/3/trending/all/day?api_key=eb5493ce8661872aada749f779f79497`
const image_url =`https://image.tmdb.org/t/p/w500`
var trend_div=document.querySelector("#trending")
fetch(url).then(function(res){
    return res.json()
}).then(function(data){
   console.log(data)
   append(data.results)
})

function append(trend){

    trend.forEach(function(ele){
        
      var div =document.createElement("div")

      var image = document.createElement("img")
        image.src=`${image_url+ele.poster_path}`
        
        var h1=document.createElement("h1")
        h1.innerText=ele.original_title||ele.name||ele.original_name

        var p = document.createElement("p")
        p.innerText=ele.overview

        var h3=document.createElement("h3")
        h3.innerText=ele.vote_average
        if(ele.vote_average>=8){
            h3.innerText=ele.vote_average
            h3.style.backgroundColor="green"
            
         }
         else if(ele.vote_average<=4){
            h3.innerText=ele.vote_average
            h3.style.backgroundColor="red"
           
         }
         else if(ele.vote_average>4&&ele.vote_average<8) {
            h3.innerText=ele.vote_average
            h3.style.background="orange"
            
         }

        div.append(image,h1,p,h3)
        trend_div.append(div)
    })
}
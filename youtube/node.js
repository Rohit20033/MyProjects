var api = `AIzaSyBZi6ouKiBY-TfT9Wq88In_KVStKLXEXxg`
var show = document.querySelector("#show")

document.querySelector("#logo").addEventListener("click",refreshwin)

function refreshwin(){
   window.location.reload()
}




 let popular = async()=>{
    show.innerHTML=""
      const popular_url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&order=viewCount&key=${api}`

   var res = await fetch(popular_url)

   var data = await res.json()
   console.log(data)
   append2(data.items)
   
   }
   popular()

   var append2=(popu)=>{
      console.log(popu)

      popu.forEach(({id:{videoId,channelId},snippet:{title,thumbnails}})=> {
         var div = document.createElement("div")
     
         var image = document.createElement("img")
         image.src=thumbnails.high.url
     
         var h3=document.createElement("h3")
         h3.innerText=title
     
         div.append(image,h3)
     
         var items ={
             title,
             videoId,
             channelId,
         }
          div.addEventListener("click",function(){
             nextpage(items)
          })
         show.append(div)
      });  
   }
   




let searchdata = async ()=>{
    
    var name = document.querySelector("#name").value
     
    const url =`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${name}&key=${api}`
     
     var res = await fetch(url)
     var data = await res.json()
     append(data.items)
     
} 
document.querySelector("#fs").addEventListener("click",searchdata)

var append = (data) =>{
console.log(data)
show.innerHTML=""
 data.forEach(({id:{videoId,channelId},snippet:{title,thumbnails}})=> {
    var div = document.createElement("div")

    var image = document.createElement("img")
    image.src=thumbnails.high.url

    var h3=document.createElement("h3")
    h3.innerText=title

    div.append(image,h3)

    var items ={
        title,
        videoId,
        channelId,
    }
     div.addEventListener("click",function(){
        nextpage(items)
     })
    show.append(div)
 });  
}
var nextpage=(items)=>{
// console.log(items)
localStorage.setItem("videos",JSON.stringify(items))
window.location.href="play.html"


}


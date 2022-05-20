var Products = JSON.parse(localStorage.getItem("Products"))|| []
console.log(Products)
displaydata(Products)
   var count=0
  for(var i=0;i<Products.length;i++){
    count++
}
console.log(count)

document.querySelector("#count").innerText=count

function displaydata(data){
   
    data.forEach(function(ele,index){
     
     var div = document.createElement("div")
     
     var h3=document.createElement("h3")
     h3.innerText=ele.name

     var div2 = document.createElement("div")
    
     var p1=document.createElement("p")
     p1.innerText=ele.cat

     var div3 = document.createElement("div")
    
     var p2=document.createElement("p")
     p2.innerText=ele.price

     var div4= document.createElement("div")
    
     var h34=document.createElement("h3")
     h34.innerText=ele.gender

     var div5= document.createElement("div")
    
     var imgage=document.createElement("img")
     imgage.setAttribute("src",ele.image)
     imgage.style.width="100%"

     
     var div6= document.createElement("div")
    
     var p=document.createElement("p")
     p.innerText=ele.gender

     var div7=document.createElement("div")
     var btn1=document.createElement("button")
     btn1.innerText="Remove"

     btn1.addEventListener("click",function(ele,index){

        removeitem(ele,index)
     })
     var remove=[]
     function removeitem(ele,index){
         
        remove.push(ele,index)
        remove.splice(index,1)
        window.location.reload()
     }







     var div8=document.createElement("div")
     var btn2=document.createElement("button")
     btn2.innerText="sold"
     btn2.style.backgroundColor="green"
     btn2.addEventListener("click",function(){

        soldornot(ele)
     })

     var colour= []
     function soldornot(ele){
        if(ele.sold=="true"){

           var red = btn2.style.backgroundColor="red"
             colour.push(red)
            localStorage.setItem("trueorfalse",colour)
        }
     }

     div.append(h3)
     div2.append(p1)
     div3.append(p2)
     div4.append(h34)
     div5.append(imgage)
     div6.append(p)
     div7.append(btn1)
     div8.append(btn2)
     document.querySelector("#bbox").append(div,div2,div3,div4,div5,div6,div7,div8)
    })
}

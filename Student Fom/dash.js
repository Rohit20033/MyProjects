let dataarr=JSON.parse(localStorage.getItem("studentdata"))|| []

// console.log(stuname)

var batc= dataarr.map(function(ele){
    return ele.batch
}).filter(function(ele){
   return ele=="Fw-18"
})


var count=0
for(var i=0;i<batc.length;i++){
   count++
}
document.querySelector("#fw18").innerHTML=count

var batc= dataarr.map(function(ele){
   return ele.batch
}).filter(function(ele){
  return ele=="Fw-15"
})


var count1=0
for(var i=0;i<batc.length;i++){
  count1++
}
document.querySelector("#fw15").innerHTML=count1

var batc= dataarr.map(function(ele){
   return ele.batch
}).filter(function(ele){
  return ele=="Fw-19"
})


var count2=0
for(var i=0;i<batc.length;i++){
  count2++
}
document.querySelector("#fw19").innerHTML=count2

var batc= dataarr.map(function(ele){
   return ele.batch
}).filter(function(ele){
  return ele=="Fw-20"
})


var count3=0
for(var i=0;i<batc.length;i++){
  count3++
}
document.querySelector("#fw20").innerHTML=count3

var batc= dataarr.map(function(ele){
   return ele.batch
}).filter(function(ele){
  return ele=="Fw-17"
})


var count4=0
for(var i=0;i<batc.length;i++){
  count4++
}
document.querySelector("#fw17").innerHTML=count4

var batc= dataarr.map(function(ele){
   return ele.batch
}).filter(function(ele){
  return ele=="Fw-16"
})


var count4=0
for(var i=0;i<batc.length;i++){
  count4++
}
document.querySelector("#fw16").innerHTML=count4


// var maaap =dataarr.map(function(ele){
//     return ele.name
// })

// console.log(maaap)

dataarr.forEach(function(ele,index){

    let div = document.createElement("div")
     div.innerText=ele.name
    let btn = document.createElement("button")
    btn.innerText="x"

    btn.addEventListener("click",function(){

        delename(ele,index)
    })
    function delename(ele,index){
        dataarr.splice(index,1)
            localStorage.setItem("studentdata",JSON.stringify(dataarr))
           window.location.reload()
       
    }

      div.append(btn)
    document.querySelector("#dashboard").append(div)
})


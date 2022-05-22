document.querySelector("#form").addEventListener("submit",submitform)
 let dataarr=JSON.parse(localStorage.getItem("studentdata"))|| []
function submitform(){
    event.preventDefault()
    console.log("yes")
    let dataobj={
        name:form.name.value,
        course:form.course.value,
        unit:form.unit.value,
        image:form.image.value,
        batch:form.batch.value,
    }
    dataarr.push(dataobj)
    console.log(dataarr)
    
    
    
   
    localStorage.setItem("studentdata",JSON.stringify(dataarr))

    
}
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


var maaap =dataarr.map(function(ele){
    return ele.name
})
console.log(maaap)
localStorage.setItem("studentsname",JSON.stringify(maaap))





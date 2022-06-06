var arr = JSON.parse(localStorage.getItem("purchase"))
var pp =document.querySelector("#purchased_vouchers")
var total = localStorage.getItem("total")
var wb = document.querySelector("#wallet_balance")


 
  arr.forEach(function(ele){

    var div = document.createElement("div")
    div.setAttribute("id",`voucher`)

    var image = document.createElement("img")
    image.src=ele.image

    var h2=document.createElement("h2")
    h2.innerText=ele.name

    var h3 = document.createElement("h3")
    h3.innerText=ele.price
    h3.setAttribute("id",`balance`)

    div.append(image,h2,h3)
    pp.append(div)

    


  })

  var tt=document.createElement("h3")
  tt.setAttribute("id",`balance`)
  tt.innerText=total
  wb.append(tt)
  



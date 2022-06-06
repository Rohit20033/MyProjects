  var user = JSON.parse(localStorage.getItem("user"))
  var array=[]


 var vl= document.querySelector("#voucher_list")
  async function check(){
    
    const url = `https://masai-vouchers-api.herokuapp.com/api/vouchers`

    var res = await fetch(url)

    var data = await res.json()
    append(data[0].vouchers)
    // console.log(data[0].vouchers)
}
check()

function append(data){
    

   data.forEach(function(ele){

     var div = document.createElement("div")
     div.setAttribute("id",`voucher`)

     var image = document.createElement("img")
     image.src=ele.image

     var h2=document.createElement("h2")
     h2.innerText=ele.name

     var h3 = document.createElement("h3")
     h3.innerText=ele.price



     var btn2=document.createElement("button")
     btn2.innerText="Buy"
     btn2.setAttribute("class",`buy_voucher`)


     btn2.addEventListener("click",function(){
        
        buyornot(ele)
      
     })
     document.querySelector("#wallet_balance").innerText=user.wallet
     function buyornot(ele){
        document.querySelector("#wallet_balance").innerHTML=""
        if(ele.price<=user.wallet){
          
            var price = ele.price
            var wallet = user.wallet
            // console.log(price,wallet)
           var ammount= wallet-price
            user.wallet=ammount
            
           document.querySelector("#wallet_balance").innerText=user.wallet
           localStorage.setItem("total",user.wallet)
   
         
          alert("Hurray! purchase successful")
          array.push(ele)

          localStorage.setItem("purchase",JSON.stringify(array))
        }
        else{
         alert("Sorry! insufficient balance")
        }
     }
     div.append(image,h2,h3,btn2)
     vl.append(div)




   })
}
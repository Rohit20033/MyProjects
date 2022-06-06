

document.querySelector("#form").addEventListener("submit",addtolocal)
var dataarr=JSON.parse(localStorage.getItem("user"))|| []

function addtolocal(){
    event.preventDefault()
    
    var dataobj={

        name : form.name.value,
        email: form.email.value,
        add :form.address.value,
        wallet:form.amount.value,

    }
    
    
    // console.log(dataarr)
    

    localStorage.setItem("user",JSON.stringify(dataobj))
    
}
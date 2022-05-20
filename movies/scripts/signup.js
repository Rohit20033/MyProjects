
 var dataarr= JSON.parse(localStorage.getItem("signupdata")) ||[]
document.querySelector("#form").addEventListener("submit",takedata)

function takedata(){
    event.preventDefault()

    console.log("yes")


    var signupobj={

     name : form.name.value,
    contact :form.contact.value,
    email : form.email.value,
     pass: form.password.value
    }
    let state=false
    if(signupobj.name==""){
        alert("Enter you name")
        state=true
    }
    if(signupobj.contact==""){
        alert("Enter number")
        state=true
    }
    if(signupobj.email==""){
        alert("Enter E-mail")
        state=true
    }
    if(signupobj.pass==""){
        alert("Enter password")
        state=true
    }

    if(state==false){
        dataarr.push(signupobj)
    console.log(dataarr)

        localStorage.setItem("signupdata",JSON.stringify(dataarr))
    }

   

    
    
     
}
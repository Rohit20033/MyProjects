


document.querySelector("#form").addEventListener("submit",addfunc)
var dataType =JSON.parse(localStorage.getItem("Products"))|| []
function addfunc(){
    event.preventDefault()
    var form = document.querySelector("#form")

    var name = form.name.value
    var cat = form.category.value
    var image = form.image.value
    var price = form.price.value
    var gender = form.Gender.value
    var sold= form.sold.value


    var data = new products(name,cat,image,price,gender,sold)
    dataType.push(data)
    console.log(dataType)

    localStorage.setItem("Products",JSON.stringify(dataType))
    

}

function products(n,c,i,p,g,s){
      
    this.name=n
    this.cat=c
    this.image=i
    this.price=p
    this.gender=g
    this.sold=s
}

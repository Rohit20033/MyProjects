class Stack {
  constructor(){
      this.length=0
      this.stack=[]
  }
  
  push(ele){
      this.stack[this.length]=ele
      this.length++
  }
  pop(){
      this.stack.pop()
      this.length--
  }
  print(){
    this.stack
  }
  printReverse(){
    this.stack.reverse()
  }
  size(){
      this.length
  }
  top(){

   this.stack[this.length-1]
     
  }
}

var s = new Stack()
 s.push(1)
 s.push(2)
 s.push(3)
//  console.log(s)

 s.pop()
//  console.log(s)
 s.print()
//  console.log(s)
 s.printReverse()
//  console.log(s)
 s.size()
//  console.log(s)
 s.top()
 console.log(s)


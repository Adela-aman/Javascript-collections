// Stack class
class Stack {
  
 
  constructor()
  {
      this.items = [];
  }

// push function
push(element)
{
    // push element into the items
    this.items.push(element);
}

// peek function
peek()
{
   
    return this.items[this.items.length - 1];
}
isEmpty()
{
   
    return this.items.length == 0;
}
printStack()
{
    var str = "";
    for (var i = 0; i < this.items.length; i++)
        str += this.items[i] + " ";
    return str;
}

}
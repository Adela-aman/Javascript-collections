

class Queue
{
    
    constructor()
    {
        this.items = [];
    }
                  
  

// enqueue function
enqueue(element)
{    
    
    this.items.push(element);
}
// dequeue function
dequeue()
{
    
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}
// isEmpty function
isEmpty()
{
    
    return this.items.length == 0;
}
// printQueue function
printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}
}
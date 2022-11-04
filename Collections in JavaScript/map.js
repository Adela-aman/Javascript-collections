// intializing map
var map1 = new Map([[1,2], [2,3], [4,5]]);
console.log("Map1");
console.log(map1);

var map2 = new Map([["name", "Adela"], ["lastname","Amani"],["faculty","computerscience"],
["university","kandahar"]]);
console.log("map2");
console.log(map2);

var map3 = new Map([["whole number",[1,2,3,4]],
["negative number",[-1,-2,-3,-4]]]);

//map properties
 
// adding elements to the map
var map4 = new Map([[40,50],[60,70]]);
console.log(map4);
map4.set(80,90);
console.log(map4);

// using map to return true
console.log("map2 has lastname?" + map2.has ("lastname"));

// return false
console.log ("map2 has school?" + map2.has ("school"));

// return an element
console.log("get value for key lastname  " + map2.get("lastname"));

// removes key
console.log("delete element with key lastname" + map2.delete("lastname"));
console.log(map2);

// clear all values
map1.clear();
console.log(map1);

// getting all entries of the map 
var map5 = new Map();
map5.set("a","b");
map5.set("c", "d");
map5.set("e","f");
console.log("______entries_______");
var get_entries = map5.entries();
for (var ele of get_entries) 
console.log(ele);

// declaring a call back function
var map6 = new Map();
map6.set ("student1", "Razia");
map6.set("student2","kafia");
map6.set("student3","Tahira");
function printOne(values)
{
  console.log(values);
}
console.log("____one parameter____")
map6.forEach(printOne);
 
// printing two parameters
function printTwo(values, key)
{
  console.log(key + " "+ values);

}
 
console.log("_____two parameter_____");
map6.forEach(printTwo);

//map used to iterate over arrays
let arr = [1,2,3,4]
let newarr = [];
newarr = arr.map((value,idx)=>{
  console.log("value"+value,"idx"+idx);
  return value*2;
})
console.log();
//orginal array
console.log("arr="+arr);
// modified array
console.log("newarr ="+newarr);


const myset1 = new Set()
myset1.add(1)
myset1.add(7)
myset1.add('Adela')
const o ={a: 1, b: 2}
myset1.add(o)
console.log(myset1)
console.log(o)
myset1.has(1)
myset1.has(5)
myset1.has(9)
myset1.size
myset1.delete(5)
myset1.has(5)
console.log(myset1)

//iterating sets
for(const item of myset1){
  console.log(item);
}

for (const item of myset1.keys()){
  console.log(item);
}

for (const item of myset1.values()) {
  console.log(item);
}

for(const [key, value] of myset1.entries()) {
  console.log(key);
}

const myarr = Array.from(myset1)

myset1.add(document.body)
myset1.has(document.querySelector('body'))
const myset2 = new Set([1,2,3,4]);
console.log(myset2.size);
console.log([...myset2]);

const intersection = new Set([...myset1].filter((x) =>myset2.has(x)));

const difference = new Set([...myset1].filter((x)=>!myset2.has(x)))

myset2.forEach((value)=>{
  console.log(value);

})

//implementing basic set operations
function isSuperset(set, subset)
{
  for (const elem of subset) {
    if(!set.has(elem)){
      return false
    }

  }
  return true;
}
function union(setA, setB){
  const _union = new Set(setA);
  for (const elem of setB){
    _union.add(elem);
  }
  return _union;
}

function symmetricDifference(setA, setB) {
  const _difference = new Set(setA);
  for (const elem of setB) {
    if (_difference.has(elem)) {
      _difference.delete(elem);
    } else {
      _difference.add(elem);
    }
  }
  return _difference;
}
const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3])
const setC = new Set([3, 4, 5, 6])

isSuperset(setA, setB)          
union(setA, setC)                
symmetricDifference(setA, setC) 


const myArray = ['value1', 'value2', 'value3'];

const myset = new Set(myArray);

myset1.has('value1')     
console.log([...myset1]); 

const numbers = [2,3,4,4,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5]

console.log([...new Set(numbers)])

const text = 'India';

const mySet = new Set(text);  
mySet.size  // 5

//case sensitive & duplicate omission
new Set("Firefox")  
new Set("firefox")  

const array = Array
  .from(document.querySelectorAll('[id]'))
  .map((e) => e.id);

const set = new Set(array);
console.assert(set.size === array.length);



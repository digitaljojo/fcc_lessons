function whatIsInAName(collection, source) {
  const arr = [];
  let c = (x) => console.log(x);
  // Only change code below this line

  
/*
Goal is to return any object in the [collection] that has a matching name and value pair to the [source]. If everything in the [source] is in [collection][x], return [collection][x].

>>Object.values(collection).forEach((x) => Object.values(x).forEach((y) => c(y)));
>>This will type out each key and value name.

*/
//Return key and value of source.
let comp_key = '';
Object.keys(source).forEach((x) => comp_key = x);

let comp_val = '';
Object.values(source).forEach((x) => comp_val = x);

// --------------

//returns keys of collection
let test_key = [];
Object.values(collection).forEach((x) => Object.keys(x).forEach((y) => test_key.push(y)));

//returns keys of collection
let test_val = [];
Object.values(collection).forEach((x) => Object.values(x).forEach((y) => test_val.push(y)));

//arr = ; 


for(let x in test_key){
  if(test_val[x] == comp_val[0]){
    arr.push(test_val[x]);
  }
  else{
    c(test_val[x]);
  }
}


c(comp_key);
c(comp_val);

c(test_key);
c(test_val)
c(arr);


  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

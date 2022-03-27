function whatIsInAName(collection, source) {
  let arr = [];
   // Only change code below this line

let c = (x) => console.log(x);
let source_val  = Object.values(source).length;

for(let x in collection){//cycle through collection
  
  let a= Object.keys(collection[x]);
  let b= Object.values(collection[x]);
  let match = 0; //Matching variable resets every iteration. 

    for(let y in source){
      //Iterates through the keys in the source obj
      if(a.includes(y)){ 
        //Checks if the keys are in the object
        if(b.includes(source[y])){
            //Checks if the values match for the given keys
            match += 1;
            }
        }
    }
    if(match == source_val){ 
      //If match value is equal to number of sources push it.
      arr.push(collection[x]);
    }
  }

  // Only change code above this line
  return arr;
}
 
//Test Cases


whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

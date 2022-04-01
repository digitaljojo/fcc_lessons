let cl = (x) => console.log(x);

function curry(sum){

return function curried(a) {
  //cl(arguments)
  if(Number.isInteger(a) && arguments.length <2){ //Verifies if a is a single number
    cl("So far so good: "+ a);
    return function next(b){ 
      cl("Maybe... "+ b);
      if(Number.isInteger(b)){ //Verifies if b is a number
        cl(a+b)
        return sum(a,b);
      }else{
        cl("Soiled it "+ b);
        return undefined;
          }
    };
  }else if(Number.isInteger(arguments[0]) && Number.isInteger(arguments[1])){
    //If two arguments passed into a, verify both numbers. else undefined
    cl("Here")
    cl(arguments[0] + arguments[1]);
    return arguments[0] + arguments[1];
  }else{
    cl("Nope")
    return undefined;
  }
    
  }
}

function sum(a, b) {
  cl(a+b);
  return a + b;
}

let addTogether = curry(sum);



addTogether(2, 3); 
addTogether(23, 30);
addTogether(5)(7);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
addTogether(2, "3");
addTogether(2)([3]);
addTogether("2", 3);

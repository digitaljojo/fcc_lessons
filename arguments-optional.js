let cl = (x) => console.log(x);

function curry(sum){

//Take One on currying
/*
 if (typeof a == 'number'){
   return function(a){
      if(Number.isNumber(b)){
        return function(b){
            cl(a + b)
            return sum(a,b);}
      }else {
        return undefined;
        }
       }
    }else {
      undefined;
    }*/


//Take Two on Currying
/*
 return function(a) {
   if(Number.isInteger(arguments[0])){ // Verifies that the argument is an int
     //cl("nice " + a);
     return function(b){  
       if(Number.isInteger(arguments[0])){ // Verifies that the argument is an int
         cl("a: "+ a+ " b: "+b);
         return sum(a,b);
       }else{
         cl("check a: "+ a+ " b: "+b);
         return undefined;
       };
     };
  }else{
    cl("nope " + a)
    return undefined;
   }
 } */

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



addTogether(2, 3); /*
addTogether(23, 30);
addTogether(5)(7);
addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
addTogether(2, "3");
addTogether(2)([3]);
addTogether("2", 3);*/

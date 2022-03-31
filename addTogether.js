function addTogether(...args) {
let cl = (x) => console.log(x);

for(let x in args){
      if(typeof args[x] != 'number'){
        cl("bad");
        return undefined;
      }
    }
  
  if(arguments.length <2){
    return addOn();
  }else{
    
  }
 //cl(args)
  cl("----");

  function addOn(...args){
    cl("okie");
  }



}

addTogether(2,3);
addTogether(23, 30);
addTogether(5)(7)
//addTogether(2, "3");
//addTogether(2)([3]);

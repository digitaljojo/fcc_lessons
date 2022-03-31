function truthCheck(collection, pre) {
  
  let cl =(x)=> console.log(x);
  let valid = true; // Set up a test operator.
  let test = pre;
  

let round = 0;
  while(valid && round < collection.length){//Loops until false or finishes loop   
    if(collection[round][test]){//Checks if value of pre is a truthy value.
    
  }
  else{ //Ends loop if value tested is a falsy
    valid = false;
  }

    round++; //Iterates through array of objects.
  } 

  cl(valid)
  return valid;
}

truthCheck([{name: "Quincy", role: "Founder", isBot: false}, {name: "Naomi", role: "", isBot: false}, {name: "Camperbot", role: "Bot", isBot: true}], "isBot");

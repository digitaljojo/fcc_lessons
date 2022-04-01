function spinalCase(str) {
  let cl = (x) => console.log(x);
  
  /*
  1. Split a string into an array.
  --must split a)at uppercase b)any non-letter c)spaces
  2.Pass each element through to lowercase.
  3. filter array by removing all nonletter characters
  4. Join array into string using hyphens.
  */
  
  let hold = str.split(/(\b|[A-Z][a-z]+|[_])/);
  //cl(hold);
  let myRegex = /(\S)/;
  hold = hold.filter((x)=> x.match(myRegex) );
  hold = hold.map((x) => x.toLowerCase());
  myRegex = /(_|-)/g;
  hold= hold.filter((x) => !x.match(myRegex));


 hold = hold.join("-");
  cl(hold)
  cl("------");
  
  
  //cl(hold);
  

  
  return hold;
}

spinalCase('This Is Spinal Tap');
spinalCase("thisIsSpinalTap");
spinalCase("The_Andy_Griffith_Show");
spinalCase("Teletubbies say Eh-oh");
spinalCase("AllThe-small Things");

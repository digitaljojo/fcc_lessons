function palindrome(str) {
  /*
  1. Put string in lowercase.
  2. Split string at all non-alphanumeric symbols.
  3. Compare str[x] to str in reverse.
  4. Return true if match.
  */
  let cl = (x) => console.log(x);
  let grade = true;  //Return output.
  str =str.toLowerCase(); //converts all to lowercase
  
  str = str.split(/\W+/);//Removes all nonalphanumeric values except underscores
  
  let test = str.join(''); //Rejoin string
  test = test.replace("_",""); //Removes underscores

  let reverse = (x) => { //Inverts the string characters.
    let backwards = [];
    for (let y in x){
      backwards.unshift(x[y]);
      }
      backwards = backwards.join("")
      return backwards;
  }

  

  grade = (test == reverse(test))? true: false; //Evaluates if palindrome.

  cl(grade);
  return grade;
}

palindrome("eye");
palindrome("A man, a plan, a canal. Panama");
palindrome("0_0 (: /-\ :) 0-0");
palindrome("five|\_/|four");

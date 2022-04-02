function telephoneCheck(str) {
  /*
  1. Make array of regexes. Make test = false.
  2. Use str.match in a for loop to verify a match. 
  3. if no matches return test.
  */

  let cl=(x) => console.log(x);
  let result = false;
  let regexList = [/\d{3}(\s|-)\d{3}(\s|-)\d{4}$/, /^(1\s|)[(]\d{3}[)](\s|)\d{3}-\d{4}$/, /^\d{10}$/, /^(1|)(\s\d{3}\s|[(]\d{3}[)])(\s|[)])\d{3}-\d{4}$/];

  for(let x in regexList){
    if (str.match(regexList[x])){
      result = true;
      cl(result)
      return result;
    }
  }
  cl(result);
  return result;
}

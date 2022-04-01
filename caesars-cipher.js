function rot13(str) {
  /*
  1. Conert str to array.
  2. Look at char value.
  3. If val = A-M, +13 to char value at that part
  3.a. If val = N-Z -13 to char value at that part.
  3.b. do not touch a character if value is not within A-Z.
  4. Rejoin string.
  5. Return value. 
  */

  let cl = (x)=> console.log(x);

  let hold = str.split("");

  for(let x in hold){
    let check = str.charCodeAt(x);
    let val = 0;
    if(check <65 || check > 90){ //Checks if between A-Z
      cl(" ")
    }else if(check >= 65 && check <=77){//A-N
      val = check + 13;
      hold[x] =  String.fromCharCode(val);
    }else if(check >=78 && check < 91){//O-Z
      val = check - 13;
      hold[x] =  String.fromCharCode(val);
    }
  }
  hold = hold.join("")
  cl(hold)
  return hold;

}

rot13("SERR PBQR PNZC");
rot13("SERR YBIR?");

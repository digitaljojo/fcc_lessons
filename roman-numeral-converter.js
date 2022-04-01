function convertToRoman(num) {
  let one = "I",
  five =  'V',
  ten = 'X',
  fifty =  'L',
  hundo = 'C',
  fivehundo = 'D',
  thousand = 'M';
  
  let place = 0; // Used to loop through number
  let cl =(x) => console.log(x);
  
  let rome = num.toString()//Convert to string.
  let numeral = []; //create blank array to hold new number
  
  rome = rome.split('')//Split string into array.
  cl(rome)
  
  for(let x = rome.length; x>-1; x--){// Start from end of array.
    let first = one;
    let second = five;
    let third = ten;

      switch(place){ //Determines which number/letter set to use.
      
      case 1: { //Ones
         first = one;
         second = five;
         third = ten;
        break;
      }
      case 2: { //Tens
        first = ten;
        second = fifty;
        third = hundo;
        break;
      }
      case 3: {//Hundreds
        first = hundo;
        second = fivehundo;
        third = thousand;
        break;
      }
      case 4: {//Thousands
        first = thousand;
        break;
      }

    }

    switch(parseInt(rome[x])){//Converts the digit to letters and pushes into the final array.
      case 0:
      case 1:
      case 2: 
      case 3: {
        for(let i = 0; i<rome[x]; i++){
          numeral.unshift(first);
        }
        break;
      }
      case 4:{
        numeral.unshift(first + second);
        break;
      }
      case 5:
      case 6:
      case 7: 
      case 8:{
        for(let i = 0; i<rome[x]-5; i++){
          numeral.unshift(first);
        }
        numeral.unshift(second);
        break;
      }
      case 9:{
        numeral.unshift(first + third);
        break;
      }
    }
    place += 1;
    //cl(numeral);
   }
  
  numeral =numeral.join(''); //Concatenates the array back into a string.
  cl(numeral)
  return numeral;
}

convertToRoman(36);

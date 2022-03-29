function dropElements(arr, func) {
  /*
  1. Make an empty array
  2. Look ar first element of arr
  3. If true, empty array is equal to rest of arr.
  */
  let cl = (x) => console.log(x)
  
  while(arr.length>0){
    if(func(arr[0])){
      break;
    }else{
      arr.shift();
    }
  }
  cl(arr)
  return arr

}

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([0, 1, 0, 1], function(n) {return n === 1;});
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;})

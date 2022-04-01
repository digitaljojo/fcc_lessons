function orbitalPeriod(arr) {
  const cl = (x) => console.log(x);
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  //cl(arr)
/*
1. Read in array.
2. Foreach object:
  Use equation to calculate OP.
  Change name of avgAlt to OP
  Input values into new object: copy name, OP is calculated value.
  Push into new array.
3. Output new array.
*/
  for(let x in Object.values(arr)){ //Iterates through each object.
    let a = arr[x].avgAlt;
    
    let orbper = Math.round((2 * Math.PI)*(Math.sqrt(((a+ earthRadius)**3)/GM)));
    arr[x].orbitalPeriod = orbper;
    delete arr[x].avgAlt;
    //cl(arr[x])
    //cl(orbper)
  }
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);

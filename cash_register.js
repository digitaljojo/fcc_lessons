function checkCashRegister(price, cash, cid) {
  let cl = (x) => console.log(x);
  /*
  Change due = cash - price.
  Create a switch case for change.
  */
  let register = {
    status: "CLOSED",
    change: cid,
  }

  let change_given = cash - price; //Evaluates amount of change due to customer.
  //cl(change_given);



  let drawer = 0;

  for (let x in cid) {
    drawer += (cid[x][1]);
  }
  drawer = drawer.toFixed(2);

  //cl(drawer);
  let receipt = [];
  //cl(cid);




  if (change_given > drawer) { //Cash on hand is less than cash in the drawer.
    register.status = "INSUFFICIENT_FUNDS";
    register.change = [];
    cl(register);
    return register;

  } else if (change_given == drawer) { //Cash in the drawer is equal to exactly what change is required.
    
    cl(register);

    return register;//Do nothing.

  } else { //Give them the change requested.
    let worth = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100] //Utilize for finding out how many to give back
    for (let x = worth.length-1; x >= 0; x--) {
      if (change_given <0){
        break;
      }
      let val = worth[x]; //Uses value of current currency
      //cl(val)
      let need = change_given/val;
      //cl(need.toFixed(2))
      //need = need.toFixed(2);
      if(need>=1){//If at least one can cover part of change
        //cl(cid[x][0]);
        let hand = need*val;

        //cl(hand)
      	if(hand <= cid[x][1] && val>=1 ){//If amount needed is less than or equal to bills in drawer of that value
        	need = Math.floor(need);
         // cl(need)
          hand = need*val;

          //cl(hand)
          receipt.push([cid[x][0], hand]);
          change_given -= hand.toFixed(2);

          //cl(change_given);
        }else if(hand <= cid[x][1]){//If amount needed is less than or equal to coins in drawer of that value
        	need = need.toFixed(2);
         // cl(need)
          hand = Math.floor(need)*val;
          hand = hand.toFixed(2) * 100/100
          //cl("In the drawer" + cid[x][1])
         // cl("What they get " + hand.toFixed(2))
          receipt.push([cid[x][0], hand]);

          change_given -= hand;

          //cl(change_given);
        }else{
          //cl(cid[x][0])
          hand = cid[x][1];
          //cl(hand)
          receipt.push([cid[x][0], hand]);
          change_given -= hand;
          //cl(change_given)
        }
      }else{

      }
      
  	}
    //cl(change_given)
    if(change_given>0){
      register.status = "INSUFFICIENT_FUNDS";
      register.change = [];
      cl(register);
      return register;
    }else{
      register.status = "OPEN";  
      register.change = receipt;
      cl(register);
      return register;
    }
  }


//cl(receipt)

}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100]
]);

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])

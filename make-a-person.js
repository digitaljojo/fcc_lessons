const Person = function(firstAndLast) {
  // Only change code below this line
  // Complete the method below and implement the others similarly
  this.getFirstName = () =>{
    let hold = firstAndLast.split(" ");
    let f_name = hold[0];
    console.log(f_name)
    return f_name;
  }

  this.setFirstName = (f_name) =>{
    firstAndLast = firstAndLast.replace(this.getFirstName(),f_name);
    console.log(this.getFirstName())
  }

  
  this.getLastName = () =>{
    let hold = firstAndLast.split(" ");
    let l_name = hold[1];
    console.log(l_name)
    return l_name;
  }

  this.setLastName = (l_name) =>{
    firstAndLast = firstAndLast.replace(this.getLastName(),l_name);
    console.log(this.getLastName)
    
  }

  this.getFullName = function() {
      console.log(firstAndLast)
      return firstAndLast;
    }

  
  this.setFullName = (new_name) =>{
    firstAndLast = new_name;
    console.log(firstAndLast);
  }
  
  
   
};

const bob = new Person('Bob Ross');
bob.getFirstName();


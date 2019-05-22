function validateCode(string){

    let counter = 0;
    //initialize counter that will keep track of open parens without closed parens
    let chars = string.split('');
    // Split string at chars and create array of chars
  
    for(let i = 0; i < chars.length; i++) {
    //iterate through array 
      if(chars[i] == '('){
        counter++
    // if open paren is found, increment counter
  
      } else if (chars[i] == ')'){
        counter--  
    //if closed paren is found, decrement counter
        if (counter < 0){
          return false; 
    //first check - if counter is less than zero, return false, because parens are out of order 
        }
      }
  
    }
  
    if (counter == 0 ){
      return true;
    } else return false;
    //second check - if counter is equal to 0 at end of iteration, parens are equal 
  
  }
  
  // validateCode("if ((x == y/z) && (q - t == 0))(")
  validateCode("if ((x == y/z) && (q - t == 0))")
  
  
  

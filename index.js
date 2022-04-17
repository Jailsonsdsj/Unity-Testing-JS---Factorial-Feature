const Calculate = {
    fatorial(number){
      if(number <= 1){
        return 1;
      }else{
        return (number * Calculate.fatorial(number-1));
      }
    }
  }
  
  const test = Calculate.fatorial(5);
  console.log(test);
  module.exports = Calculate;
  
  
  
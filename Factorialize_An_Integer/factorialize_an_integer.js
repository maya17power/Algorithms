//Factoralize the value of integer n.
//factorial is the product of all positive integers less than or equal to n.

function factorialize(num) {
  var nRange = [];
    if(num <= 0){
      return 1;
    }
      for(var i = 1; i <= num; i++){
          nRange.push(i);
      }
    return nRange.reduce(function(pV, cV){
           return pV * cV;
           });
}

factorialize(0);

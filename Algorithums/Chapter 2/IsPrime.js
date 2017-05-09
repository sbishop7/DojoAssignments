function isPrime(int){
  if(int==1){
    return true;
  }
  if(int==2){
    return true;
  }
  var i = 2;
  while(i<int){
    if(int%i===0){
      return false;
    }
    i +=1;
  }
  return true;

}

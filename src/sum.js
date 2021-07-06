function sum(a){
  function innerFunction(b){
    return parseInt(a) + parseInt(b);
  }
  return innerFunction;
}

export default sum;
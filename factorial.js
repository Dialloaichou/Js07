module.exports = factorial;

function factorial(n){
    var z=1;
for (var i=1;i<=n;i++){
     z*=i; 
  
}
return z;
}

console.log(factorial(6));
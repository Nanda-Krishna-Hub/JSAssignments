function factorial(n){
    let a =1;
    if(n == 0 || n == 1){
        return a;
    }
    else{
        for(var i = n; i>=1; i--){
            a = a*i;
        }
        return a;
    }
}

let n = 5;
console.log(factorial(n)+ " is the factorial of given number.");
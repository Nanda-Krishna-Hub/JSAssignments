function matchHouses(n){
    return 6*n-(n - 1);
}
// for 1 step it takes 6 match sticks
// for 2 steps it takes 6*2-1
// for 3 steps it takes 6*3-2
// for n steps it takes 6*n-(n-1)
 
console.log(matchHouses(87));

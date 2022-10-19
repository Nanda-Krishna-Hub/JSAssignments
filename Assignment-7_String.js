/*  1.

            let S = "Ice"
        if(S.length>4){
            S = S.slice(0,4)+"..."
            console.log(S)
        }
        else console.log(S)

*/


/*  2.
        let S = "Hii Boy"
        S = S.replace(/ /g, "").trim()
        console.log(S)

*/



/* 3.
        let S = "Hii Boy"
        let i = S.indexOf(" ")
        S = S.substring(i+1, S.length) + " " + S.substring(0,i)
        console.log(S)

*/



/*  4.
        let S = "apple"
        S = S.replace("a", "x")
        console.log(S)

*/


/*  5. Split method is used to convert String to Array.
*/

/*  6.
        if we want to find index of specific String then we can use indexOf method

        if we need how many times text occured, regex can be used and also split method
        is used and count the text occurance in array
*/



/*  7.  \n is used to break a string to a newline in javascript
*/



/*   8.

            
        let S = "This is String"
        if((S.charCodeAt(0)>=65) && (S.charCodeAt(0)<= 90))
        console.log("First letter is uppercase")
        else console.log("First letter is not uppercase")

*/


/*  9.
            
        let S = "yes"
        let k = S.substring(1, S.length)
        S = S.toUpperCase()
        console.log(S)
        k = S.charAt(0) + k
        console.log(k)

*/



/*  10. 
        let S = "this is String"

    a. 
        S = S.toUpperCase()
    
    b.
        let k = S.substring(1, S.length)
        S = S.toUpperCase()
        k = S.charAt(0) + k
        console.log(k)

    c.
        S = S.toLowerCase();

    d.
        let l = S.length/2
        S = S + S.substring(0, l)
        S = S.substring(l,S.length)

    e.
        let S = 'this String is the Stirng this is the string'
        let k = S.match(/is/g)
        console.log(k.length)

    f.
        let s = "This is the Stirng"
        let S = s.split('')
        S = S.reverse()
        S = S.join('')
        console.log(S)


*/






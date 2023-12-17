function people(n) {
    let car;
    let result = n / 5;
    let people = n; {
        if (n % 5 === 0) {
            return result;}
    else { if (n % 5 !== 0 ) {
                return Math.ceil(result);
            } 
        }}
    }

console.log(people(25))
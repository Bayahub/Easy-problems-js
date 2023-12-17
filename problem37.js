const sumAll = function(a, b) {
    let total = [];
    let sum = 0;
    let first = a;
    let second = b;
            if (a < b){
                for (let i = a ; i < b; i++) {
                    total.push(i);
                }
            }
            else {
                for (let i = b; i < a; i++) {
                    total.push(i);
                }
            }
            for (let i = 0+1; i < total.length; i++) {
                sum += total[i];
            };
            return sum;
        }
console.log(sumAll(1,5));








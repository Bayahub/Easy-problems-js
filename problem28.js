
function service(age,bartender){
    if (age>18 && bartender==="not on break") {
        return "can be served";
    } else{
        return "can not be served";
    }
} 
console.log(service(19,"not on break"))
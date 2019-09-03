//computes factorial of a number
const factorial = (number)=> {
    if (number === 0) {
        return 1; //returning the value to the calling function
    }
    return number * factorial(number-1);
};




//adds to numbers together
const sum = (a,b)=> a+b;




module.exports = {
    factorial,sum
}
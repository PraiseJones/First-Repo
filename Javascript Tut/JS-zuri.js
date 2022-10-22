
// console.log(78 % "k")

const isDivisibleByNum = (num, divisibleNm) => {
    if(num % divisibleNm === 0){
        return true;
    }
    else {
        return false;
    }
}


console.log(isDivisibleByNum(78))
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore (num, num1){

    if ((num === 1 || num === 3 || num === 4 || num === 5) && (num1 === 1)){
        return names[0]

    } else if((num === 4 || num === 5) && (num1 === 2)){
        return names[1]

    } else if ((num === 3)&&(num1 === 2) || (num === 4)&&(num1 === 3) || (num === 5)&&(num1 === 4)){
        return names[2]

    } else if (num === num1 && [3, 4, 5].includes(num)){
        return names[3]

    } else if ((num === 3)&&(num1 === 4) || (num === 4)&&(num1 === 5) || (num === 5)&&(num1 === 6)){
        return names[4]

    } else if ((num === 3)&&(num1 === 5) || (num === 4)&&(num1 === 6) || (num === 5)&&(num1 === 7)){
        return names[5]

    } else if ((num === 3)&&(num1 === 7) || (num === 4)&&(num1 === 8) || (num === 5)&&(num1 === 9)){
        return names[6]

    }
}

console.log(golfScore(1, 1))
console.log(golfScore(3, 1))
console.log(golfScore(4, 1))
console.log(golfScore(5, 1))
console.log(golfScore(4, 2))
console.log(golfScore(5, 2))
console.log(golfScore(3, 2))
console.log(golfScore(4, 3))
console.log(golfScore(5, 4))
console.log(golfScore(3, 3))
console.log(golfScore(4, 4))
console.log(golfScore(5, 5))
console.log(golfScore(3, 4))
console.log(golfScore(4, 5))
console.log(golfScore(5, 6))
console.log(golfScore(3, 5))
console.log(golfScore(4, 6))
console.log(golfScore(5, 7))
console.log(golfScore(3, 7))
console.log(golfScore(4, 8))
console.log(golfScore(5, 9))








/*if (
    (num1 === 1 || num1 === 2 || num1 === 3) &&
    (num2 === 1 || num2 === 2 || num2 === 3)
) {
    console.log("Se cumple la condición");
}
    

if (
    [1, 2, 3].includes(num1) &&
    [1, 2, 3].includes(num2)
) {
    console.log("Se cumple la condición");
}*/
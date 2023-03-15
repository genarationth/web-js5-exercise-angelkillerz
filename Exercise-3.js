// Decrease by 0.5
function decreaseByNumber(num) {
    console.log(`Original number is ${num}`);
    while(num > 0) {
        console.log(num)
        num -= 0.5;
        
    }
    console.log('Finish decreasing');
}

//O/P

// decreaseByNumber(100);



//Print all odd numbetween 1-100

function printOdd(num) {
    const oddNum = []
    for(let i = 0; i <= num ; i++) {
        if(i % 3 === 0) {
            oddNum.push(i);
        }
    }
    for (let number of oddNum) {
        console.log(number);
    }
}

// printOdd(100);

//While loop print 1 through n in square brackets

function printSquare(num) {
    const resultArr = [];
    while(num > 0) {
        resultArr.push([num]);
        num--;
    }

    resultArr.reverse();
    console.log(resultArr);
}

printSquare(6);

//Write a method with a while loop that computes the sum of first n positive integers:
//sum = 1 + 2 +3 + ...+ n
/*
Example 
n = 5 sum = 15
n = 19 sum = 190
*/

/*
 Using Arithmetic Sequence Fomula 
 an = a1 +(n-1)d
 where n = nth term 
 d = common difference

 Sum of n = n/2(first term + last term)

 where n = terms 



*/
function sumOfSeries(num) {
    let firstTerm = 1;
    let lastTerm = num
    const sumOfN = ((num / 2) * (firstTerm + lastTerm));

    return sumOfN;
}

console.log(sumOfSeries(19));
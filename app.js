console.log("Hello World!\n==========\n");
function printOdds(count){
    
    for(let i = 1; i <= count; i++){
        if (i % 2 != 0) {
            console.log(i);
        }
    }
    
}
printOdds(10);

function checkAge(userName, age){
    let oldEnough = `Congrats ${userName}! You can drive!`;
    let notOldEnough = `Sorry ${userName}. You need to wait until your sixteen.`;

    if(age < 16 ){
        console.log(notOldEnough) 
    } else {
        console.log(oldEnough) 
    }
}

checkAge("Leon", 15);
checkAge("Ravan", 21);
checkAge("Ryan", 12);

function checkQuadrant(x, y){
    if(x > 0 && y > 0){
        return "Quad 1";

    }else if(x < 0 && y < 0){
        return "Quad 3";
    }else if(x > 0 && y < 0){
        return "Quad 4";
    }else if( x < 0 && y > 0){
        return 2;
    }else if(x == 0 && y != 0){
        return "X Axis";
    }else if (x != 0 && y == 0){
        return "Y Axis";
    }else {
        return "Origin";
    }
}
console.log(checkQuadrant(8, -1));
console.log(checkQuadrant(-4, -5));
console.log(checkQuadrant(0, 9));


function isValidTriangle(a, b, c){
    return a + b > c && a + c > b && c + b > a

}
function triangle(a, b, c){
    let isValid = isValidTriangle(a, b, c);
    if (isValid){
        if (a == b && b == c){
            return "Equilateral";
        }else if (a == b || b == c || a == c){
            return "Isosceles";

        }else {
            return "Scalene";
        }
    } else {
        return "Not a valid triangle.";
    } 
}
console.log(isValidTriangle(2, 3, 4));
console.log(isValidTriangle(1, 2, 2));
console.log(isValidTriangle(1, 1, 2));

function dataUsageFeedback(planLimit, day, usage){
    let periodLength = 30;
    let currentAvg = usage/ day;
    let projectedAvg = planLimit / periodLength;
    let remainingData = planLimit - usage;
    let remaingDays = periodLength - day;
    let projectedUsage =  remaingDays * currentAvg;
    let statusMsg;
    console.log(`${day} day(s) used, ${remaingDays} day(s) remaining `);
    console.log(`Average projected use: ${projectedAvg} GB/day`);

    if (currentAvg > projectedAvg){
        statusMsg= "EXCEEDING";
    }else if (currentAvg < projectedAvg) {
        statusMsg = "UNDER";

    } else {
        statusMsg = "AT";
    }
    console.log(`You are EXCEEDING your average daily use (${currentAvg} GB/day),
    continuing this high usage, you'll end up using ${planLimit - (usage +  projectedUsage)} GB from your data limit.To stay below your data plan, use no more than ${remaingDays / remaingDays} GB/day.`);

}
dataUsageFeedback(50, 12, 25);
dataUsageFeedback(55, 15, 20);
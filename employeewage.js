// UC1
function attendance() {
    const attendance = Math.floor(Math.random() * 2);
    return attendance;
}
if (attendance() === 1) {
    console.log("Employee is Present");
}
else {
    console.log("Employee is Absent");
}

// UC2
const timing = Math.floor(Math.random() * 3);
if (attendance() === 1) {
    switch (timing) {
        case 0:
            console.log("The employee wage for full day is $160");
            break;
        case 1:
            console.log("The employee wage for half day is $80");
            break;
        case 2:
            console.log("The employee wage for no working is $0");
        default:
            break;
    }
}
else{
    console.log("The employee is Absent");
}

// UC3
function wageCalculator() {
    const timing = Math.floor(Math.random() * 3);
    let wage = 0;
    if(attendance() ===1){
    switch (timing) {
        case 0:
            console.log("The employee wage for full day is $160");
            wage = 160;
            break;
        case 1:
            console.log("The employee wage for half day is $80");
            wage = 80;
            break;
        case 2:
            console.log("The employee wage for no working is $0");
        default:
            break;
    }
    }
    else{
        console.log("The employee is Absent");
    }
    return wage;
}

wageCalculator();


// UC4

let day = 0;
let totalWage = 0;
while (day !== 20) {
    let wage = wageCalculator();
    if (wage !== 0) {
        totalWage += wage; 
    }
    day++;
}
console.log(totalWage);


// UC5

let days = 0;
let totalhours = 0;
let salary = 0;
while (days < 20 && totalhours < 160) {
    let empstatus = Math.floor(Math.random()*3);
    switch (empstatus) {
        case 0:
            days++;
            totalhours += 8;
            salary += (8*20);
            break;
        case 1:
            days++;
            totalhours += 4;
            salary += (4*20);
            break;
        case 2:
            days++;
            salary += 0;
            break;
        default:
            break;
    }
}
console.log(`The salary of the employee for the month is ${salary}`);

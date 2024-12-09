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
function hourCalculator() {
    const timing = Math.floor(Math.random() * 3);
    let hours = 0;
    if(attendance() ===1){
    switch (timing) {
        case 0:
            console.log("The working hours for full day is 8 hours");
            hours = 8;
            break;
        case 1:
            console.log("The working hours for half day is 4 hours");
            hours = 4;
            break;
        case 2:
            console.log("The working hours for no working is 0 hours");
            hours = 0;
            break;
        default:
            break;
    }
    }
    return hours;
}

hourCalculator();


// UC4

let day = 0;
let totalhour = 0;
while (day !== 20) {
    let workinghours = hourCalculator();
    if (workinghours !== 0) {
        totalhour += workinghours; 
    }
    day++;
}
console.log("The wage for a month is $"+  totalhour*20);


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

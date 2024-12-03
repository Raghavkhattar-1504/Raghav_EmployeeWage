// UC1
const attendance = Math.floor(Math.random() * 2);

if (attendance === 1) {
    console.log("Employee is Present");
}
else {
    console.log("Employee is Absent");
}

// UC2
// const timing = Math.floor(Math.random()*3);

// switch (timing) {
//     case 0:
//         console.log("The employee wage for full day is $160");
//         break;
//     case 1:
//         console.log("The employee wage for half day is $80");
//         break;
//     case 2:
//         console.log("The employee wage for no working is $0");
//     default:
//         break;
// }

// UC3
function wageCalculator() {
    const timing = Math.floor(Math.random() * 3);
    let wage = 0;
    switch (timing) {
        case 0:
            // console.log("The employee wage for full day is $160");
            wage = 160;
            break;
        case 1:
            // console.log("The employee wage for half day is $80");
            wage = 80;
            break;
        case 2:
            // console.log("The employee wage for no working is $0");
        default:
            break;
    }
    return wage;
}

// wageCalculator();


// UC4

const totalSalary = wageCalculator();
console.log(`Total Salary for the month is ${20*totalSalary}`);


// UC5

let days = 0;
let totalhours = 0;
let salary = 0;
while (days < 20 && totalhours < 160) {
    let empstatus = Math.floor(Math.random()*2);
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
        default:
            break;
    }
}

console.log(totalhours);
console.log(salary);

console.log("this is the third question");

let marks =prompt("enter the number",0);
let percentage = (marks/100)*100;
 
if(percentage < 60){
    console.log('grade is E');
}
else if(percentage <70 && percentage >60){
    console.log('grade is D');
}
else if (percentage<80 && percentage>70){
    console.log('grade is C');
}
else if(percentage<90 && percentage>80){
    console.log('grade is B');
}else if (percentage<100 && percentage>90){
    console.log('grade is A');
}

//USING SWITCH
switch (percentage) {
    case 55:
        console.log('grade is E');
        
        break;
    case 65:
        console.log('grade is D');
        break;
    case 75:
        console.log('grade is C');
        break;
    case 85:
        console.log('grade is B');
        break;
    case 95;
        console.log('grade is A');
        break;
    default:
        console.log('you failed the exam');
        break;
}

//USING TERNARY
let result = (percentage<60) ? 'grade is E':
             (60 < percentage<70) ? 'grade is D':
             (70 <percentage <80) ? 'grade is C':
             (80<percentage <90)  ? 'grade is B':
             (90 < percentage <100)? 'grade is A';

console.log('result');
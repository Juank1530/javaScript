console.log("Hello Everybody");
console.log(5+5);

//Variables

var myName = 'Juank';
console.log(myName);
console.log(typeof(myName));

var age = 37;
console.log(age);
console.log(typeof(age));

age = 'Five';
console.log(age);
console.log(typeof(age));

var salary = 1900.99;
console.log(salary);
console.log(typeof(salary));

var isHeWorking = false;
console.log(isHeWorking);
console.log(typeof(isHeWorking));

var spot;
console.log(spot);
spot = null;
console.log(typeof(spot));

/*
Comments in block
*/

//Coments in line

//Math operator

var age1, age2, diffAges;
var sumAges, year1, year2, currentYear;

age1 = 37;
age2 = 28;
currentYear = 2023;

diffAges = age1-age2;
sumAges = age1-age2;

year1 = currentYear-age1;
year2 = currentYear-age2;


console.log(diffAges);
console.log(sumAges);

console.log('Year 1 was born in:' + year1);
console.log('Year 2 was born in:' + year2);

console.log(currentYear * 5);
console.log('')
console.log(currentYear / 2);

//Logic operator

//Logic <> <= >= ==

var mayor = age1 > age2
console.log(mayor)

var mayor = age1 < age2
console.log(mayor)

var mayor = age1 == age2
console.log(mayor)

var mayor = !(age1 == age2)
console.log(mayor)

//Unarios, ++Increment --Decrease

console.log(age1++)
console.log(age1--)

//allocation += -= *=/= %=

var module = age1 % age2
console.log(module)

age1 += age2

console.log(age1)

//if else

var isHeMarried = false

if (isHeMarried == true) {
    console.log('He is Married')
} else {
    console.log('He is single')
}

age = 15
console.log(age)
if (age < 12) {
    console.log(myName + ' is a child')
} else if((age >11) && (age < 18 )){
    console.log(myName + ' is a teenager')
}else if((age >17) && (age < 60 )){
    console.log(myName + ' is an adult')
}else{
    console.log(myName + ' is a old man')
}

// Switch sentence

var month = 1;

switch (month) {
    case 1:
        console.log('January')
        break;
    case 2:
        console.log('February')
        break;
    case 3:
        console.log('March')
        break;
    case 4:
        console.log('April')
        break;
    case 5:
        console.log('May')
        break;
    default:
        console.log('No found month')
        break;
}

// For sentence or loop

for (let index = 1; index <= 10; index++) {
    console.log(index)
}

for (let index = 1; index <= 10; index+=2) {
    console.log(index)
}

for (let index = 10; index >= 1; index--) {
    console.log(index)
}

for (let index = 5; index <= 50; index+=5) {
    console.log(index)
}

// For while, do while

var i = 1;

while (i <= 10) {
    console.log(i)
    i++
}

var i = 10;
while (i >= 1) {
    console.log(i)
    i--
}

var i = 1

do {
    console.log(i)
    i+=2
} while (i<=10);
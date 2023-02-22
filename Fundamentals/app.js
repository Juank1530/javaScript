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
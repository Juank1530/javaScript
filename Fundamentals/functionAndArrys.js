function message(){
    console.log('First message, this function doesn\'t have parameters')
}

message()

function message2(msg){
    return 'We receive this message by arguments ' + msg
}

var newMsg = message2('\"Hello Im a message\"')
console.log(newMsg)

function add(n1,n2,n3){
    return n1+n2+n3
}
var result = add(5,6,9)
console.log(result)

function add1(n1,n2,n3=0){
    return n1+n2+n3
}
var result1 = add1(5,6)
console.log(result1)

var add3 = function(a,b,c=0){
    return a+b+c
}
var result2 = add3(5,6,8)
console.log(result2)

//Recursive functions

var factorial = function(n){
    if((n==0) || (n==1))
        return 1
    else
        return(n * factorial(n-1))
}

console.log(factorial(4))

//Predefined functions
// check this documentation https://www.tutorialspoint.com/javascript/javascript_builtin_functions.htm

//Arrays

var drinks = ['a','b','c']
var drinks2 = new Array('d','e','f')

var names = ['Juank','Monik','Paula','Diego']
var vegetables = new Array('tomato','potato','carrot')

console.log(names[0])
console.log(vegetables[2])

names [3] = 'Julio'
vegetables [1] = 'onion'

console.log(names[3])
console.log(vegetables[1])

console.log(names.length)

for (let index = 0; index <= names.length-1; index++) {
    console.log(names[index])
}

for (let index = 0; index <= vegetables.length-1; index++) {
    console.log(vegetables[index])
}

vegetables.forEach(function (element, index) {
    console.log(element,index)
})

names.forEach(function (element, index) {
    console.log(element,index)
})

names.push('Camilo')
console.log(names)

names.unshift('Jack')
console.log(names)

names.pop()
console.log(names)

names.shift()
console.log(names)

var spot = names.indexOf('Paula')
console.log(spot)

names.splice(1,1)
console.log(names)

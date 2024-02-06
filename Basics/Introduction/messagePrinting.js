
console.log("Hello using log method of console");

console.warn("Pahali baar samjha raha bhaiye sudhar ja");

console.error("Bhaiye tumne kuchh to galat kiya hai check karle");

console.info("Sun bhai 2mhe tumhari ex ke baare me kuchh info deni thi");


console.info("Array Printing using table")
arr=[1,2,3,4,5];
console.table(arr)

console.info("Array of Objects Printing using table")
arrOfObjects=[{
    "name":"Kapil",
    "age":20
},
{
    "name":"Amit",
    "age":21
},
{
    "name":"Ravi",
    "age":22
}
];
console.table(arrOfObjects)


// console.clear();

console.group();
console.log("A1");
console.log("A2");

console.log("A3");

console.log("A4");
console.table(arrOfObjects)

console.groupEnd();


name="Kapil";

console.count(name);
console.count(name);
console.count(name);
console.count(name);
console.count(arr);

// console.trace(arr)


console.time(name)
console.log("printing")
for(let i=0;i<=1000;i++)
{
    
}

console.timeEnd(name)



// alert("It's a alert message");

// prompt("Trying to get input from user and laterly we can use it somewhere in our code");



// process.stdout.write("Used to write in same line but it is a feature of node not in JS")




console.log('hello ji');
// types of string
//1. premitive
//2. object 

// premitive wale mai . laga dene se javascript internally treat it like a object string 
let lastName = 'yadav';
let firstName = new String('samiksha');
let message = 'this is my first message';
let words = message.split(' ');
let message2 = 'this is \n my second\n message';
console.log(message2);
console.log(words);

// ` these are backticks used toh write or print the words in same was as they are shown they are called backticks` 
let message3 = 
`hello samiksha,

thankyou for joining the cource 

regards
love babbar`

console.log(message3);

//we can write the above name dynamically by using placeholder
let message4 = 
`hello ${lastName},

thankyou for joining the cource 

regards
love babbar`

console.log(message4);

// DATES 
let date = new Date();
let date2 = new Date('apil 13 2023 02:03');
let date3 = new Date(2003, 3, 24, 7);
// console.log(date3);

//setting date by using setter
date3.setDate(25);
date3.setFullYear(2004);
date3.setMonth(4);
console.log(date3);


//Arrays
let number = [1,2,3,4,5];
console.log(number);
//*****************************INSERTION :-*****************************
//insertion at first , mid and end
//1. method to insert at back
number.push(9);
console.log(number);

//2. method to insert at beginning
number.unshift(8);
console.log(number);

//3. method to insert at middle
number.splice(2,0, 'a', 'b', 'c', 'd');
console.log(number);

//*****************************SEARCHING********************************
console.log(number);
console.log(number.indexOf(4));
console.log(number.indexOf('b'));
console.log(number.indexOf(11));
//we want to check if number exisit in array
if(number.indexOf(4) != -1){
    console.log("present");
}
//but this is not a good practice thus we use the following method 
console.log(number.includes(7));
console.log(number.indexOf(4,2));

//****************************POPPING**********************************
let numbers = [1,2,3,4,5,6,7,8,9];
console.log(numbers);

//to pop from the back/end
numbers.pop();
console.log(numbers);

//to pop from front/beginning
numbers.shift();
console.log(numbers);

//to op from the middle
numbers.splice(2,1);
console.log(numbers);

///************************EMPTYING AN ARRAY***************************/
let numbers3 = [1,3,5,7,9];
numbers3 = [];
console.log(numbers3);

//************************COMBINING AND SLICING ARRAY******************/
//COMBINING :-
let first = [1,3,5];
let second = [7,9,11];
// concate second array in first 
let combined = first.concat(second);
console.log(combined);

// to remove elements from the concated array we use *slice*
// SLICING :-
let marks = [10,20,30,40,50,60,70,80,90];
let sliced = marks.slice(2,3);
console.log(sliced);

//spread operator to combine 
let one = [1,1,1];
let two = [2,2,2];
let combined2 = [...one,...two] ;
console.log(combined2);

//or 

// combining and adding elemmets in array 
let one01 = [1,1,1];
let two02 = [2,2,2];
let combined3 = [...one,'a',...two,'b'] ;
console.log(combined3);

//*******************************ITERATING IN ARRAY********************/
let brr = [1,11,111,1111,11111];
brr.forEach(number=> console.log(number));


//********************************JOINING ARRAY***********************
let mssg = 'this is my first array again'
let parts = mssg.split('_');

console.log(parts);

let joined = parts.join('_');
console.log(joined);

//*************************SORTING ARRAYS**************************
let nums = [10,60,20,30,80];
nums.sort();
console.log(nums);
//***************************REVERSING*********************************/
nums.reverse();
console.log(nums);

//*************************FILTERING ARRAY*****************************/
let numerals = [1,2,-1,-4];

let filtered = numerals.filter(function(value){

    // conditions 
    //return value => 0;
    // return value < 0; 
    return value > 0;
});
console.log(filtered);

//*********************************MAPPING ARRAYS**********************/
let crr = [7,8,9,10];
console.log(crr);

let items = crr.map(function(value) {
    return 'student_no'+ value;
})

console.log(items);


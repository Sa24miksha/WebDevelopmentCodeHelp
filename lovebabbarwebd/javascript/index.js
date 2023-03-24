                                     /*Java-Script*/

console.log('hello world its me samiksha') 

//variables
let a= 5;
console.log(a)
let b= 'samiksha';
console.log(b)

//constants
const num =10;
console.log(num);

//premitive data type
//dynamic typing :-
let lastName = 'babbar';
console.log(lastName);
lastName = 3;
console.log(lastName);

//reference type :-
// 1. objects 
// 2. arrays in js :- data structure that contain a list of it
// 3. Functions 


//Arthmatic Operators'
let first =11;
let second = 2;
let c = first + second;
console.log(c);

let firtstt = 2;
let secondd = 3;
let ddd = firtstt**secondd;
console.log(ddd);

//******************operators*************** 
// 1. pre-increment :- ++x , pehle value of increment kardo then use the value 
let inc = 10;
console.log(++inc);

// 2. pre-decrement :- decrement the value first then print the value 
let dec = 10;
console.log(--dec);

// 3. post-decrement :- pehle kam kardo value 
let pos = 10;
console.log(pos--);

//question 
let aa = 5;
let bb = 10;
let ans1 = (++aa)*(--bb);
let ans2 = (aa++)*(--bb);
let ans3 = (aa++)*(bb--);
let ans4 = (++aa)*(bb--);
console.log(ans1,ans2,ans3,ans4);

// 4. assignment operator :- let a =5 ; x=a+5 or x+=5; a=a*3 or a*=3;

// 5. comparison operator 
// <  less than
// >  greater than
// >= greaterthan eualto
// <= lessthan equalto
// === strictly equal
// !== not equal to

//*************equality operator************* 
// 1. loose equality ( == ) :- only value should be same
// 2. strict equality ( === ) :- data and value both should be same
//  example :- 
let num1 = 1;
let str = '1';
// here data are same but value is not same hence is is not strict equality but it is loose equality

//*****************Ternary Operator*************
// syntax  :- condition ? val1 : val2;
//                       (true) (false) 
// example :-
let age = 17;
let status = (age>=18)? 'you can vote':'you cannot vote';
console.log(status);

//Logical operator 
// 1. AND 
// 2. or 
// 3. NOT 

// Bitwise operator 
// 1. Bitwise AND = &
// 2. Bitwise OR  = |

//Operator Precidence
// use brackets bitch  

//control statements 
// 1. if-else 
// 2. switch 
// example :- 
let marks = 98;
if(marks>=90){
    console.log('A');
}
else if(marks>=80){
    console.log('B');
}
else if(marks>=70){
    console.log('C');
}
if(marks>=60){
    console.log('D');
}
else{
    console.log('F');
}

//Switch case 

let num3 = 2;
switch(num3){
    case 1 : console.log('A');
    break;
    case 2 : console.log('B');
    break;
    case 3 : console.log('C');
    break;
    default : console.log('D');
}


//LOOPS :- repetition of tasks 
// 1. for loop 
for(let i=0; i<5; i=i+1){
    console.log("sam"+i);
}

// 2. while loop 
let x = 1;
while(x <= 5){
    console.log(x);
    x++;
}

// 3. do while loop 


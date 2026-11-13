
//Operator in TypeScript
//Arthmatics operators
let a : number = 20;
let b : number = 10;

// +, -, 8, / %, ++, --
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(++a);
console.log(a++);
console.log(--b);
console.log(b--);

//Assignment operator
// =, +=, -=, *=, /=, %=
let c : number = 10;
 c+=10
 console.log(c);
 c-=10;
 console.log(c);
 c*=10;
 console.log(c);
 c/=10;
 console.log(c);
 c%=10;
 console.log(c);

//Comparision operator
//==, ===, !=, !==, >, <, >=, <=
let d  : number = 10;
let e  : number = 20;

console.log(d==e);
console.log(d===e);
console.log(d!=e);
console.log(d!==e);
console.log(d>e);
console.log(d<e);
console.log(d>=e);
console.log(d<=e);

//Logical operator
//&&, ||, ! and or not operator
let f : boolean = true;
let g : boolean = false;
console.log(f && g);
console.log(f || g);
console.log(!f);
console.log(!g);

//Ternary operator
let h : number = 21;
let i : number = 20;
//just like a if else statement, it will check the condition
//(condition) ? (if true) : (if false)
let j : number = (h > i) ? h : i;
console.log(j);


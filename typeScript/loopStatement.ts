
// for loop
let name : String = "Santosh";
for (let i : number = 0; i<=10; i++){
    console.log(i, name);
}

//while loop
let j = 0;
while(j<=10){
    console.log(j, "test");
    j++;
}

// do while loop
let k: number = 0;
do{
    console.log(k);
    k++;
}while(k<=10);

let employee = {
    name: "Santosh",
    age: 28,
    company: "SD Global"
};

for (let key in employee) {
    console.log(key);
}

//for of loop
let arr : number[] = [1,2,3,4,5,6,7,8];
for (let value of arr){
    console.log(value);
}


//Jumping Statement
//beak statement
for (let i: number = 1; i <= 10; i++) {
    if (i === 2) {
        break;
    }
    console.log(i);
}
//continue statement
for (let a : number = 1; a<=5; a++){
    if(a===2){
        continue;
    }
    console.log(a);
};

//return statement
let b : number = 12;
let c : number = 20;
function addNumber(b : number, c : number): number{
    console.log("addition of two number is: ", b+c);
    return b+c;
}
addNumber(b,c);

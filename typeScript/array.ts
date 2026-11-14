
//Array
let numbers : number [] = [2,3,4,5,6,6];
let fruits : string [] = ["Apple", "Mango", "Banana", "Pianeapple", "Kivi"]
console.log(numbers);
numbers.push(88);
console.log("test");
console.log(numbers);
numbers.pop();
console.log(numbers);
console.log(numbers.length)
numbers.unshift(55)
console.log(numbers);
numbers.shift();
console.log(numbers);
console.log(numbers.indexOf(55));
console.log(numbers.slice(2,4));
let result : (number | string)[] = numbers.concat(fruits)
console.log(result);

numbers.forEach((value)=>{
    console.log(value);
})
// for  of loop
for(let eachvalue of numbers){
    console.log(eachvalue);
}
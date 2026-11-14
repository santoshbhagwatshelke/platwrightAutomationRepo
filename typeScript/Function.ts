
//Function
// Named Function

     // function function_name(parameter)): return type{
    //     function body
    // }

    function sayHello(name:String): String{
        console.log(`Hello ${name}`);
        return `Hello ${name}`;
    }
    sayHello("Santosh");
    
//Arrow Function

     let info = (name: string, age: number): void=>{
        console.log(`Hello ${name} your age is ${age}`);
     }
     info("Santosh", 28);

     let info2 = (newage : number, year: number): number =>{
        return newage+year;
     }
     console.log(info2(28,2024));

    
// Anonomaous function 
       let data = function (name:string, age : number) : String{
        return "Hello "+ name + " and "+ age;
       }
       console.log(data("Santosh", 34));

//without parameter, without return type
function greet(): void {
    console.log("Hello World");
    
}
greet();
//with parameter, without return type
function greet1(name: string): void{
    console.log("Hello "+name);
}
greet1("Santosh");
//Function Without Parameters & With Return Type
function greet2(): string{
    return "Hello world2";
}
console.log(greet2());

//Function With Parameters & With Return Type
function greet3(name: string): string{
    return name+" Shelke";
}
console.log(greet3("Santosh"));

//function with optional parameter
function greet4(name? : string): string{
    if(name===undefined){
        return "Hi Hello name is not provided"
    }
    return "Hi Hello "+ name;
}
console.log(greet4("Test"));

//with default value
function greet5(a: number, b: number =10): number{
    return a*b;}
console.log(greet5(5));
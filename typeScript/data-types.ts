// ***********Primitive Datatypes**********
// ****************************************

//number  => The data type that can store numbers with decimals or without decimals 
//Number should be stored without any quotations. 

//1. Number
let num1 : number = 5;
let num2 : number = 5.5;
console.log(num1+num2); // 10.5

//2. String
let FN : String = "Santosh";
let LN : String = "Shelke";
console.log(FN," ",LN); // Santosh Shelke

let isMarried : boolean = true;
console.log(isMarried); // true

//union
let address : String | number = "Pune";
console.log(address); // Pune

let sal : undefined;

let empRole  : null = null;
//1. number
//2. String
//3. boolean
//4. union
//5. undefined
//6. null
let testno: number = 123456789;


//1.  Object
interface empData {
    empName : String;
    empNo : number;
    empstatus : boolean;
    empsal: number;
    empaddress :{
        l1:String;
        l2:String;
    }
}
let empinfo : empData = {
    empName : "Santosh",
    empNo : 123,
    empstatus : true,
    empsal : 50000,
    empaddress : {
        l1 : "Pune",
        l2 : "Maharashtra"
    }

}
console.log(empinfo.empNo)
console.log(empinfo.empaddress.l1)

//Function
function launchtheApplication(browserName: String, url: String): void{
    console.log("Application is launched in ", browserName, " with url ", url);
}
launchtheApplication("Chrome", "https://www.google.com");

function addNumbers(num1: number, num2: number): number {
    let num3: number = num1 + num2;
    return num3;
}
let num4: number =addNumbers(56,66);
console.log(num4); // 122



function addName(FN: String, LN: String):String{
    let FullN: String = FN + " " + LN;
    return FullN;
}
console.log(addName("Santosh","Shelke"));
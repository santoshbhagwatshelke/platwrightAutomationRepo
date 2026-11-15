
let name : string = "Somjay";
console.log(name);
console.log(name.length);
console.log(name.charAt(4));
    let reversString = "";
for(let i : number = name.length-1; i>=0; i--){
            reversString += name.charAt(i)
}
        console.log(reversString);
    
    let fullName : string = " Santosh Shelke";
    console.log(fullName.slice(1,4));
    console.log(fullName.trim());
    console.log(fullName.replace("tosh", "dhya"));

    let a :  string = "Santosh1465 Shelke"
    console.log(a.replaceAll(/[0-9]/g, "X"));

    console.log(a.padStart(28, "T"));
    console.log(a.padEnd(28, "Test"));
    console.log(a.substring(5,9));
    console.log(a.split(" "));
    console.log(a.startsWith("S"))
    console.log(a.endsWith("e"));
    console.log(a.match(/S/g));
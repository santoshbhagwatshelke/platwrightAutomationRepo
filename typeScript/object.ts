
//object
interface personTemplate {
    name : string
    LN : string
    age : number
    id : number
    isMale :boolean
    address : addressTemplate
}
interface addressTemplate {
    street1 : string
    street2 : string
    pin : number
}

let personDetails : personTemplate = {
    name : "Santosh",
    LN : "Shelke",
    age : 25,
    id : 76,
    isMale: true,
    address:{
        street1 : "Test Street",
        street2 : "tet test",
        pin : 6575
        
    }
}

console.log(personDetails.name + personDetails.address.street1);
personDetails.age = 45
personDetails.email = "fjhfk@gmail.com"
console.log(personDetails.email);
delete personDetails.email;
console.log(personDetails.email);

console.log("email" in personDetails);
console.log(Object.keys(personDetails));
console.log(Object.values(personDetails));
console.log("Test new");
console.log(Object.entries(personDetails));

let secondperson = {...personDetails};
console.log(secondperson);

for(let key in personDetails){
    console.log(key)
}
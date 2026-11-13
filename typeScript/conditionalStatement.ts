  //if statement
  let age  : number = 17;
  let isProd : boolean = false;
  let isMen : boolean = true;

    if(age >= 18){
        console.log("You are eligible to marriage");
    }
    else if(isProd){
        console.log("You are eligible to marriage as you are Prod");
    }
    else if(isMen){
        console.log("You are eligible to marriage as you are Men");
    }
    else{
        console.log("You are not eligible to marriage");
    }


    let p : number = 69;
    if(p>= 90){
        console.log("A+");
        if(p>=80){
            console.log("A");
            if(p>=70){
                console.log("B+");
                if(p>=6){
                    console.log("B");
                }
                else{
                    console.log("C");
                }
            }
        }
    }
    else{
        console.log("Fail");
    }
    
    //switch case
    let a: number = 11;
    switch(a){
        case 12 :
            console.log("The value of a is 12");
            break;
        case 11:
            console.log("The value of a is 11");
            break;
        default:
            console.log("The value of a is not 11 or 12");
    }
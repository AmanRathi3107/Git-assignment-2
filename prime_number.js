//  Question 1 : Check To prime Number or not 

let num=5;

if(num==1){
    console.log("1 is not a prime not a composite number");
}
else if(num%2==0 || num%3==0){
    console.log("Not a Prime Number")
}
else{
    console.log("${num} is Prime Number")
}


// Question 2 : Check given string is Palindrome or not 

let str="naman";
let nstr="";

for (i=str.length-1;i>=0;i--){
    nstr=nstr+i;
}

nstr==str ? console.log("Yes It is an Palindrome")
:console.log("No Its Not  Palindrome");


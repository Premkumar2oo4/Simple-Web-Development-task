
let random=Math.random()
let result=random*100;
let num1=1//prompt("enter your first number")
let num2=2//prompt("enter your second number")
let operation='-'//prompt("enter your operation")
console.log(result)
if(result>10){
    switch(operation){
        case '-':
            console.log(num1-num2);
            break;
        case '+':
            console.log(num1+num2);
            break;
        case '*':
            console.log(num1*num2);
            break;
        case '/':
            console.log(num1/num2);
            break;
        case '%':
            console.log(num1%num2);
            break;
    }
}
else{
    switch(operation){
        case '-':
            console.log(num1/num2);
            break;
        case '+':
            console.log(num1-num2);
            break;
        case '*':
            console.log(num1+num2);
            break;
        case '/':
            console.log(num1**num2);
            break;
        case '%':
            console.log(num1*num2);
            break;
    }
}


let random=Math.random()
let result=random*100;
let num1=prompt("enter your first number")
let num2=prompt("enter your second number")
let operation=prompt("enter your operation")
console.log(result)
let obj={
    '+':'-',
    '-':'/',
    '*':'+',
    '/':'**',
    '%':'*'
}

if(result>10){
   alert(`THE ANS IS : ${eval(`${num1} ${operation} ${num2}`)}`)
        
}
else{
    let c=obj[operation]
    alert(`THE ANS IS : ${eval(`${num1} ${c} ${num2}`)}`)
}

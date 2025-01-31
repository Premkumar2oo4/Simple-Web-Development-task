let random=Math.random()
let first,second,third;
if(random<=.33){
    first="Crazy"
}
if(random>.33 && random<=.66){
    first="Amazing"
}
else{
    first="Fire"
}
let ran=Math.random()
if(ran<=.33){
    second="Engine"
}
if(ran>.33 && ran<=.66){
    second= "Foods"
}
else{
    second="Garments"
}
let kingdom=Math.random()
if(kingdom<=.33){
    third= "Bros"
}
if(kingdom>.33 && kingdom<=.66){
    third= "Limited"
}
else{
    third="Hub"
}
console.log(`your store name is ${  first+"_"  }${  second +"_"}${ third  }`)
console.log(random,kingdom,ran)


 







       
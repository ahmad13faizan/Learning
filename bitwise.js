
const start=new Date().getTime()

let a=2
a=BigInt(a)
let c=2
c=BigInt(c)

let i=0;
while(i<3000){
     a=a*c;
    i++
}
console.log("prod is: "+a)
const end=new Date().getTime()

console.log(`start is ${start} and end is ${end}`)

console.log("difference in mul is: ",parseInt (end)- parseInt(start))




const start1=new Date().getTime()
let d=2
d=BigInt(d)
let e=1
e=BigInt(e)
let j=0;
while(j<3000){
    d=d<<e;
    j++
}

const end2=new Date().getTime()

console.log(`start is ${start1} and end is ${end2}`)

console.log("difference in left shift bitwise is: ",parseInt (end2)- parseInt(start1))

console.log("prod is: "+d)


add=(a,b)=>{
    return a+b
}

console.log("addition is "+add(4,5))

function greet(name,message="Welcome"){
    console.log(`hi, ${name} ${message}`)

}
greet("faizan")



function formatString(name,age){
    console.log(`Hello my name is ${name} and i am ${age} years old`)
}

formatString("faizan",23)

const person={
    name:'Alice',
    age:'25',
    city:'New York'
}

console.log({...person})

function extract(person){
   const {name:first_name,city:place}=person
    console.log(`${first_name} lives in ${place}`)
}
extract(person)



var total

function sum(...values){
    total=0;
    values.forEach(element => {
        total+=element
    });
    console.log("Total is: "+total)

}

sum(1,2,3,4,5)


const { name, ...personFinal} = person

console.log(personFinal)



function even(...nos){
    let arr=[]
    nos.map((no)=>{
        if(no&1==1){
            arr.push(no)
        }
    })
    return arr
}

console.log("even nos are: "+even(1,2,4,56,7,8,65))



function doubleValues(no){
    let arr=[]
    no.map((nos)=>{
        arr.push(nos<<1)
    })
    return arr;
}
console.log("double is: "+doubleValues([6,7,8,1,2,3]))


function findMax(arr3){    
    return Math.max(...arr3)
}

console.log("max is : "+findMax([1,2,3,4,5,6,7,18,9]))


const data=[{
    name:"Bob",
    age:24 
},
{
    name:"Alice",
    age:21
}
]

function extract2(data) {
    [obj1,obj2]=data
    
    return `${obj2.name}'s age is ${obj1.age}`
    
}

console.log(extract2(data))



// cloning object that willl have  a new reference but would be of same type as object 1

const obj3={
    a:1,
    b:{c:2}
    
}



function deepClone(obj){

    function Object(a,b,c)
    {   this.a="",
        this.b={
            c:""
        }
    }

    return new Object()

}


objclone= deepClone(obj3)

objclone.b.c=42

console.log(objclone.b.c)
console.log(obj3.b.c)

//flat function below


function flat(temparr,arrR){
 
    if(arrR.length===1){
        temparr.push(arrR[0])
        return;
    }
    temparr.push(arrR[0])
    flat(temparr,arrR[1])
    
}

function flatHelp(myArr){

    temparr=[]

    flat(temparr,myArr)

    return temparr;
}

Array.isArray(1)


console.log(flatHelp([1,[2,[3,[3,[5]]]]]))
/*

let , const , var , mehtods , index 

2- for , if , while 

*/

// let myStudent = "ahmad"



// let i = 0 
// // post incremental 

// ++i // بتزيد واحد على المتغير 
// console.log(i)
// i++ // بتجيب المتغير بعدين بتزيد عليه 1 

// console.log(i)

// // pre incremental 


// for (let i = 0 ;i<=10;i++) {
//     console.log(i)
//  }


//  if (10==10) {
//     console.log("yes")
//  }

let mynumber = 10 
let yourNumber ="10"
// عندي 3 يساوي
/*
1- = assing بعطي قيمة للمتغير 
2- == compare between two values regardless the data type 
3- === identical compare (compare the data type (string,int)+value)

*/


/* 

if the student get a marke between 0-49 the system will print sorry you have failed 
, if the student get between 50-60 the system will print you got D

if the student get between 61 and 70 he will get C 

if the student get between 71 and 80 he will get B

if the student get between 81 and 90 he will get A

and if the sutdnt get between 91 - 100 he will get A+

if the user enter any other value he will be asked to enter the correct value 

*/

let mark = prompt("please enter your mark")

if (mark>=0 && mark<=49) {

   alert("sorry you have failed")
    
} else if (mark>=50 && mark<=60){
   alert("you got D")

} else if (mark>=61 && mark<=70){
   alert("you got C")

} else if (mark>=71 && mark<=80){
   alert("you got B")

} else if (mark>=81 && mark<=90){
   alert("you got A")

} else if (mark>=91 && mark<=100){
   alert("you got A+")

}else{
   alert("please enter the correct value")
}
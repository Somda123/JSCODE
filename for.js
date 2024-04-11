// // ........how to work for loop.
// // below code here working  correct code
// const input=require('readline-sync');
// let n = input.questionInt("Enter range of loop : ");
// for ( let i = 1; i <= n; i++)
// {
//     console.log("hello : ",i);
// }


// //....... how to work for loop.
// // here below code is say workability (working) working  
// const input=require('readline-sync');
// let n = input.questionInt("Enter range of loop : ");
// for ( let i = 1; i <= n; i++)
// {

// }
// console.log("hello : ",i); // in this (line) side i is not coming  when loop is range is false . that why here say i is not definede( i is not defined )

// //........ this is a nested for loop
// const input =require('readline-sync');
// let n =  input.questionInt("Enter the range of loop : ");
// for (i= 1; i <= n; i++)
// {
//     console.log("hey : ",i);

//     for ( j = 1; j <= n; j++) // no need curli bracket below this inner loop this is truely working 
//        console.log("hello : ",j);   
// }


// //........ this is a nested for loop here difference between curli bracket nessecery or not 
// const input =require('readline-sync');
// let n =  input.questionInt("Enter the range of loop : ");
// for (i= 1; i <= n; i++)
// {
//     console.log("hey : ",i);

//     for ( j = 1; j <= n; j++) 
//     {// no need curli bracket below this inner loop this is truely working 
//        console.log("hello : ",j);   

//     }  
// }


// //........ for loop  (how to work)
// const input =require('readline-sync');
// let n = input.questionInt("Enter range of loop : ");
// let i=1;
// for (;i<=n; i++)
// {
//    console.log("hii : ",i);
// }

// //........ for loop  (how to work) no need to same lline write a code in for loop
// const input =require('readline-sync');
// let n = input.questionInt("Enter range of loop : ");
// let i=1;
// for (;i<=n;)
// {
//    console.log("hii : ",i);
//    i++;
// }

// //......... Infinite print how to work for loop. this is a Infinite print.
// // here below code is say workability (working) working  
// const input=require('readline-sync');
// // let n = input.questionInt("Enter range of loop : ");
// let i=1;
// for ( ;; )
// {
//     console.log("hello : ",i);
//     i++;
// }
//  // in this (line) side i is not coming  when loop is range is false . that why here say i is not definede( i is not defined )



// // ...........loop scope (var)
// var i = 5;

// for (var i = 0; i < 10; i++) {
//   // some code
// console.log("so");
// }
// console.log(i);
// // Here i is 10



// //.............loop scope(let)
// let i = 5;

// for (let i = 0; i < 10; i++) {
//   // some code
// console.log("so");

// }
// console.log(i);
// // Here i is 5
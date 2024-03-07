// // Write a program to print all the numbers from the given array using a loop.
// // L = {23, 45, 32, 25, 46,33, 71, 90}

// const input=require('readline-sync');
// let L=input.questionInt("Enter lenth  : " );
// let arr=[];
// let i=0; 
// while (i<L)
// {
//     arr[i]=input.questionInt("Enter number : ");
//     // let b=input.question("Enter number : ");
//     //  arr[i]+= b;
//      i++
// }
// console.log(arr)
// let j=0;
// while (j<L)
// {

// console.log(arr[j]);
// j++;

// }


// // Write a program to create an array of natural numbers till 20 and print it.
// const input=require('readline-sync');
// let L=input.questionInt("Enter how much creat number lenth : " );
// let A=input.questionInt("Enter which number start : " );
// let arr=[];
// let i=0; 
// while (i<L)
// {
//     arr[i]=A
// //     // let b=input.question("Enter number : ");
// //     //  arr[i]+= b;
//      i++
//      A++;
// }
// let j=0;
// while (j<L)
// {
// console.log(arr[j]);
// j++;

// }


// // Write a program to reverse the array and print the reversed array.
// // Test Case1:
// // Input:
// // 23 45 32 25 46 33 71 90

//  // HERE BELOW  WHILE LOOP AND FOR LOOP WORKING FOR REVERCE PRINTING 
// const input=require('readline-sync');
// let L=input.questionInt("Enter lenth  : " );
// let arr=[];
// // let i=0; 
// // while (i<L)
// for(let i=0;i<L;i++)
// {
//     arr[i]=input.question("Enter number : ");
//     //  i++;
// }
// // let j=L-1;
// // while (j>=0)
// for( let j=L-1; j>=0; j--)

// {
// console.log(arr[j]);
// // j--;

// }


// // Write a program to take size of array, array and target as input from the user and check whether the target exists in this array or not.

// // Test Case1:
// // Input:
// // 7
// // 1 2 3 4 5 6 7
// // 3
// const input=require('readline-sync');
// let L=input.questionInt("Enter length  : " );
// let arr=[];
// let i=0; 
// while (i<L)
// {
//     arr[i]=input.question("Enter number : ");
//      i++;
// }
// let N=input.questionInt("Enter maching number : " );
// let c=0;
// let j=0;
// while (j<L)

// {
//     if (arr[j]==N)
// {
//     c+=1
// }
// else
// {
//     c=c; 
// }
// j++;
// }
// if (c>0)
// {
//     console.log("yes! here present.");
// }
// else 
// {
//     console.log("No! here present.");  
// }


// // Q. Write a program to print the sum of all the odd numbers and even numbers in the given array.
// // Note: In the output, you should print odd numbers sum and even numbers sum in this order only.

// // Test Case1:
// // Input:
// // 23 45 32 25 46 33 71 90
// // Output:
// // 197
// // 168

// const input=require('readline-sync');
// let L=input.questionInt("Enter length  : " );
// let even = 0;
// let odd = 0;
// let arr=[];
// let i=0; 
// while (i<L)
// // for (let i=0; i<L; i++)  //( this also correct )
// {
//     arr[i]=input.questionInt("Enter number : ");
//      i++;
// }

// let j=0;
// while (j<L)
// // for (let j=0; j<L; j++)  //( this also correct ) 
// {
//     if (arr[j] % 2 == 0)
//      {
//     even+=arr[j];
//     j++;

//      }
//     else
//      {
//     odd = odd + arr[j];
//     j++;
//      }
// }
// console.log("Even sum = ",even,"odd sum = ",odd);




// // Q.  Write a program to take N numbers from a user as input and then print the duplicates in those N numbers. Also, take N as an input from the user.

// // Test Case 1:
// // Input:
// // 5
// // 2 4 2 6 3
// // Output:
// // 2

// // Test Case 2:
// // Input:
// // 6
// // 2 4 6 3 3 2
// // Output:
// // 3 2

// // dublicate number finding  correct code
// const input = require('readline-sync');
// let n=input.questionInt("Enter length : ");
// let arr=[];
// for(let i=0; i<n; i++)
// {
//     arr[i]=input.questionInt("Enter number : ");
// }
// let i=0;
// while(i<n)
// {
//     let p = 1;
//     let j=i+1;
//     while(j<n)
//     {
//         while (arr[i]==arr[j])
//         {
//             p=p+1;
//             let k=j
//             while(k<n)
//             {
//                 arr[k]=arr[k+1]
//                 k=k+1;
//             }
//             n=n-1;
//         }
//          p=p;
//          j++;
        
//     }
//     if (p>1)
//     {
//         console.log(arr[i]);
//     }
//     else
//     {

//     }
//     i++;
// }


// // Write a program to take N numbers from the user and print the frequency of every number.

// // Test Case 1:
// // Input:
// // 6
// // 2 4 2 6 3 6
// // Output:
// // 2 - 2
// // 4 - 1
// // 6 - 2
// // 3 - 1
// // frequency number finding  correct code
// const input = require('readline-sync');
// let n=input.questionInt("Enter length : ");
// let arr=[];
// for(let i=0; i<n; i++)
// {
//     arr[i]=input.questionInt("Enter number : ");
// }
// console.log("below here frequency : ");
// let i=0;
// while(i<n)
// {
//     let p = 1;
//     let j=i+1;
//     while(j<n)
//     {
//         while (arr[i]==arr[j])
//         {
//             p=p+1;
//             let k=j
//             while(k<n)
//             {
//                 arr[k]=arr[k+1]
//                 k=k+1;
//             }
//             n=n-1;
//         }
//          p=p;
//          j++;
        
//     }
//     console.log(arr[i],"-",p);


  

//     i++;
// }



// Write a program to take two sorted arrays of size M, N from the user as input and merge them into a single sorted array of size M+N (Do not use sorting)

// Test Case1:
// Input:
// 1 2 5 6
// 3 4 7 9
// Output:
// 1 2 3 4 5 6 7 9

// // merge him number finding  correct code

// const input = require('readline-sync');
// let m=input.questionInt("Enter length M  : ");
// let arr1=[];
// let arr2=[];
// let arr=[];
// for(let i=0; i<m; i++)
// {
//     arr1[i]=input.questionInt("Enter number  : ");
// }
// let n=input.questionInt("Enter length N  : ");
//     for(let i=0; i<n; i++)
//     {
//        arr2[i]=input.questionInt("Enter number  : ");
//     }   
//         let i = 0;
//         let j=0;
//         let k = 0;
//        while(k < m+n)
//     //    for(let k=0; k<m+n; k++)
//       {
        
//         while(i<m)
//         {
            
//             while (j<n)
//             {
//                 while (arr1[i] < arr2[j]) 
//                 { 
//                     //console.log(arr1[i])
//                     arr[k]=arr1[i]

//                     i++;
//                     k++;
//                 }
                
//                 //console.log(arr1[j])
//                 arr[k]=arr2[j]
//                 j++;
//                 k++;

//             }
//             // //console.log(arr1[j])
//             arr[k]=arr2[i]
//             i++;
//             k++;

        
//         }
//         // //console.log(arr1[i])
//         arr[k]=arr1[j] 
//         j++;
//         k++;
        
//       }
//     //   console.log(arr1)
//     //   console.log(arr2)
//     //   console.log(arr)
//       for(k=0; k<m+n; k++)
//       {
//         console.log(arr[k])
//       }
 

// // merge him number finding  correct code
// const input = require('readline-sync');
// let m=input.questionInt("Enter length M  : ");

// let arr1=[];
// let arr2=[];
//  let arr=[];

// for(let i=0; i<m; i++)
// {
//     arr1[i]=input.questionInt("Enter number : ");
// }
// let n=input.questionInt("Enter length N : ");

//     for(let i=0; i<n; i++)
//     {
//        arr2[i]=input.questionInt("Enter number  : ");
//     }   let i=0;
//         let j=0; 

//     for(let k=0; k<n+m; k++)
//     {
//        if(arr1[i]<arr2[j])
//        {
//           arr[k]=arr1[i];
//         //  console.log(arr1[i])
//          i++;
//        }
//        else
//        {
//         arr[k]=arr1[j];

//         // console.log(arr2[j])
//         j++;
//        }
//     }   
//     for(let k=0; k<n+m; k++)
//     {
//         console.log(arr[k]);
//     }
    




// // Write a program to take value N from the user and print the following pattern based on the user input.
// // array = [2, 3, 5, 2, 1]
// // >>
// // >>>
// // >>>>>
// // >>
// // >
// const input = require('readline-sync');
// let n=input.questionInt("Enter length n  : ");
// let arr=[];

// let s="";
// // let k="";
// for (i=0; i<n; i++)
// {
//     arr[i]=input.questionInt("Enter Num : ");
// }
//    for (i=0; i<n; i++)
//   {
//     for (j=1; j<=arr[i]; j++)
//     {
//     s+=">";
//     // k+="<";
//     }
//     s+="\n";
//     // k+="\n";
//   }
// //   let r = s+k
//   console.log(s);
// //   console.log(r);





// // // diffrent code fo undistant for 
// // // Define the array
// // const array = [1, 2, 3, 4, 5];

// // // Define the value to add to each element
// // const constantToAdd = 10;

// // // Perform array addition
// // const resultArray = array.map((value) => value + constantToAdd);

// // // Display the result
// // console.log("Original Array:", array);
// // console.log("Constant to Add:", constantToAdd);
// // console.log("Result Array:", resultArray);


    




// function sieveOfEratosthenes(n) {
//     // Create an array to store whether each number is prime
//     let isPrime = new Array(n + 1).fill(true);
    
//     // 0 and 1 are not prime numbers
//     isPrime[0] = isPrime[1] = false;

//     // Iterate through the numbers up to the square root of n
//     for (let i = 2; i * i <= n; i++) {
//         // If i is a prime number
//         if (isPrime[i]) {
//             // Mark all multiples of i as not prime
//             for (let j = i * i; j <= n; j += i) {
//                 isPrime[j] = false;
//             }
//         }
//     }

//     // Return an array of prime numbers
//     let primes = [];
//     for (let i = 2; i <= n; i++) {
//         if (isPrime[i]) {
//             primes.push(i);
//         }
//     }

//     return primes;
// }

// // Example: Find all prime numbers up to 30
// let limit = 30;
// let result = sieveOfEratosthenes(limit);
// console.log(result);

// method 1: allPrimeBruteForce(T)


    //   for i = 2 to T
    //   if isPrime(i) print(i)
    //   End
// method 2: isPrime( n )

//  const input =require('readline-sync');
//  let n = input.questionInt("Enter n : ");

//     //  for i = 2 to n / 2
//     //  if (n % i == 0) return true
//     //  End
//     //  return false;
//      let i=2
//      if ( i<=n/2)
//      {
//       if (n%i==0)
//     {  
//         return true; 
//     }
//     else 
//     { 
//     return false; 
//     }
//      }


// a=2;
// b=4;
// c=a+b;
// console.log(c)

// a=2;
// b=4;
// a=4;
// c=a+b+a;
// console.log(c);


  // // break; command how to used 
// const input = require('readline-sync');
// let n=input.questionInt("Enter n : ");
// let s=0;
// for ( i=1; i<=n; i++)
// {
//     s=s+i;
//     break;  // in this break; command only one time go and after break out of loop  
// }
// console.log(s)

 // // break; command how to used 
 // const input = require('readline-sync');
// let n=input.questionInt("Enter n : ");
// let s=0;
// for ( i=1; i<=n; i++)
// {
//     s=s+i;
//     if (i==4)
   // { break;}   // in this break; command only one time go and after break out of loop  
   
// }
// console.log(s)


// // continue; command how to used 
//  const input = require('readline-sync');
// let n=input.questionInt("Enter n : ");
// let s=0;
// for ( i=1; i<=n; i++)
// {
//     s=s+i;
//     if (i==4)
//    { continue;}   // in this break; command only one time go and after break out of loop  
   
// }
// console.log(s)


// console.log(Math.PI)

// let PI;
// console.log(Math.PI)


// Math.E: 2.718281828459045

// Math.PI: 3.141592653589793

// Math.SQRT2: 1.4142135623730951

// Math.SQRT1_2: 0.7071067811865476

// Math.LN2: 0.6931471805599453

// Math.LN10: 2.302585092994046

// Math.LOG2E: 1.4426950408889634

// Math.Log10E: 0.4342944819032518


// //  MY JS CODE.....Math Properties (Constants)
// console.log(Math.E)
// console.log(Math.PI)
// console.log(Math.SQRT2)
// console.log(Math.SQRT1_2)
// console.log(Math.LN2)
// console.log(Math.LN10)
// console.log(Math.LOG2E)
// console.log(Math.LOG10E)

// //  Math.round()
//  // Math.round(x) returns the nearest integer:
// console.log(Math.round(11.1))
// console.log(Math.round(11.6))

// // Math.ceil()
// // Math.ceil(x) returns the value of x rounded up to its nearest integer:
// console.log(Math.ceil(11.1))

// // Math.floor()
// // Math.floor(x) returns the value of x rounded down to its nearest integer:
// console.log(Math.floor(11.1));
// console.log(Math.floor(11.6));

// // Math.trunc()
// // Math.trunc(x) returns the integer part of x:
// console.log(Math.trunc(11.1));
// console.log(Math.trunc(11.6));
// console.log(Math.trunc(12));


// // Math.sign()
// // Math.sign(x) returns if x is negative, null or positive:
// console.log(Math.sign(11.1));
// console.log(Math.sign(11.6));
// console.log(Math.sign(12));


// // Math.pow()
// // Math.pow(x, y) returns the value of x to the power of y:
// console.log(Math.pow(8, 2));

// Math.sqrt()
// Math.sqrt(x) returns the square root of x:


// date 
// const d = new Date();
// console.log(d);

// sorting.........
// const fruits = ["Banana", "Orange", "Apple", "Mango","rabbit","somdalife", "nephture"];
// fruits.sort();
// console.log(fruits);

// // sorting.......
// const input=require('readline-sync');
// let n=input.question("Enter total fruit num : ");
// let arr=[];
// let ar=[];
// let =0;
// // str="";
// for (i=0; i<n; i++)
// {
//   arr[i]=input.question("Enter fruit neme : ");
// }
// // str="hdsjcsk"
// let j=0;
// for (i=0; i<n; i++)
// {
//   ar[j]=arr[i].sort;
//   j++;
// }
// for (i=0; i<n; i++)
// {
//   console.log(ar[i])
// }


// // "Write a program to take two sorted arrays from the user as input and find the Union and Intersection of the arrays.

// // Test Case1:
// // Input:
// // 1 3 4 5 7
// // 2 3 5 6
// // Output:
// // 1 2 3 4 5 6 7
// // 3 5"

// const input=require('readline-sync');
// let n=input.question("Enter n : ");
// let arr=[];
// let ar=[];
// let a=[];
// let b=[];
// let i,j,k;
// for (i=0; i<n; i++)
// {
//   arr[i]=input.question("Enter number : ");
// }
// let m=input.question("Enter m : ");
// for (i=0; i<m; i++)
// {
//   ar[i]=input.question("Enter number : ");
// }
//  console.log(arr,ar);
// let r=0;
// i=0;
// j=0;
// k=0;
// while ( i<n+m )
// {
  
//    while (  j<n )
//    {
//     // console.log(j);
//     while ( k<m )
//     { 
//       // console.log(arr,ar);
//       while (arr[k]==ar[j])
//       {
//         //console.log(arr,ar);
//         a[r]=arr[k];
//       }
      
      
//         while (arr[k]<ar[j])
//         {
//           // console.log(arr,ar);
//           b[r]=arr[k]; 
          
//         }
//          // console.log(arr,ar);
//           b[r]=ar[j];
          
      
//     }
//    }i++; 
//    k++;
//    j++;
//    r++;
//    console.log(a,b);
// }


//  // intersect and union 
// const input = require('readline-sync');
// let m=input.questionInt("Enter length M  : ");

// let arr1=[];
// let arr2=[];
// let arr3=[];
// let arr=[];

// // let arr=[];

// for(let i=0; i<m; i++)
// {
//     arr1[i]=input.questionInt("Enter number : ");
// }
// let n=input.questionInt("Enter length N : ");

//     for(let i=0; i<n; i++)
//     {
//        arr2[i]=input.questionInt("Enter number  : ");
//     }
//     console.log(arr1,arr2)
//        let i=0;
//         let j=0; 
//     for(let k=0; k<n+m; k++)
//     {
//       if (arr1[i]==arr2[j])
//       {
//         arr[k]=arr1[i];
//         //console.log(arr1[i])
//         i++
//       }
//       else if(arr1[i]<arr2[j])
//        {
//         arr3[k]=arr1[i];
//          //console.log(arr1[i])
//          i++;
//        }
//        else
//        {
//         arr3[k]=arr2[j];
//         //console.log(arr2[j])
//         j++;
//        }
//     }   
    
// console.log(arr,arr3);


// // union and intersect  code some thing correct 
// const input = require('readline-sync');
// let m=input.questionInt("Enter length M  : ");
// let arr1=[];
// let arr2=[];
// let arr=[];
// let arr3=[];
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
//               if (arr1[i]==arr2[j])
//               {
//                 arr3[k]=arr1[i];
//               }
//                 if (arr1[i] < arr2[j]) 
//                 { 
//                     //console.log(arr1[i])
//                     arr[k]=arr1[i]

//                     i++;
//                     k++;
//                 }
//                 else
//                 {
//                 //console.log(arr1[j])
//                 arr[k]=arr2[j]
//                 j++;
//                 k++;}

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
//   console.log(arr,arr3)


    // //   console.log(arr1)
    // //   console.log(arr2)
    // //   console.log(arr)
    //   for(k=0; k<m+n; k++)
    //   {
    //     console.log(arr[k])
    //   }

      
    // const input = require('readline-sync');
    // let m=input.questionInt("Enter length M  : ");
    // if (m>0)
    // {
    //   console.log("this is negative ",m);
    // }
    // else 
    // {
    //   console.log("this is positive",m);
    // }

    
// //Write a program to take two numbers from the user and determine the greater of those two given numbers.

// const input =require('readline-sync');
// let a =input.questionInt("Enter a : ");
// let b =input.questionInt("Enter b : ");
// if (a>b)
// {
//     console.log("this is greater = ",a);
// }
// else 
// {
//     console.log("this is greater = ",b);
// }


// // Write a program to take a number from the user and print that number as Odd or Even.
// const input = require('readline-sync');
// let n = input.questionInt(" Enter n : ");
// if (n%2==0)
// {
//     console.log(n,"is a Even ")
// }
// else
//  {
//     console.log(n,"is a Odd ")
// }


// // Write a program to take a number from the user and output whether that number is negative, positive or zero.
//  const input = require('readline-sync');
//  let n = input.questionInt(" Enter n : ");
// if (n==0)
// {
//     console.log("this is a zero number : ",n) 
// }
// else if (n>0)
//     {
//         console.log("this is a positive number : ",n)  
//     }
//     else {
//         console.log("this is a negative number : ",n)
//     }


// // Write a program to take an integer as input and print the smallest positive integer that is a multiple of both 2 and n.
// const input = require('readline-sync');
// let n = input.questionInt("Enter n : ");
// if (n%2==0)
// {
//     console.log(n)
// }
// else
// {
//     n=n*2
//     console.log(n)
// }


// // Write a program to take three numbers from the user and print the greater number of the three numbers. (Assume all three numbers are distinct)
// const input = require('readline-sync');
// let a = input.questionInt("Enter a : ");
// let b = input.questionInt("Enter b : ");
// let c = input.questionInt("Enter c : ");
// let max = a;
// if (b>max)
// {
//     max=b;
// }
// if (c>max)
// {
//     console.log(c);
// }
// else 
// {
//     console.log(max);
// }


// // Write a program to take four numbers from the user and print the greater number of the four numbers. (assume all the numbers are distinct).
// // Input:
// // 98
// // 13
// // 29
// // 58
// const input = require('readline-sync');
// let a = input.questionInt("Enter a : ");
// let b = input.questionInt("Enter b : ");
// let c = input.questionInt("Enter c : ");
// let d = input.questionInt("Enter d : ");
// let max = a;
// if (b>max)
// {
//     max=b;
// }
// if (c>max)
// {
//     max=c;
// }
// if (d>max)
// {
//     console.log(d);
// }
// else 
// {
//     console.log(max)
// }

// const input = require('readline-sync');
// let a = input.questionInt("Enter a : ");
// let b = input.questionInt("Enter b : ");
// let c = input.questionInt("Enter c : ");
// let d = input.questionInt("Enter d : ");

// if (a>b)
// {
//     max=a;
//     min=b;
// }
// else
// {
//     max=b;
//     min=a;
// }
// if (c>d)
// {
//     max1=c;
//     min1=d;
// }
// else
// {
//     max1=d;
//     min1=c;;
// }
// if (max>max1)
// {
//     console.log(max)
// }
// else
// {
//     console.log(max1)
// }



// // Write a program to take a year from the user and output whether a given year is a leap year or not. 
// const inpu=require('readline-sync')
// let y = inpu.questionInt("Enter year : ")
// // let y =1900;
// if (y%100==0)

// if (y%400==0)
// {
//  console.log(y,"is a leap year.")
// }
// else
// {
// console.log(y,"is not leap year.")
// }
//  else if(y%4==0)
// {
// console.log(y,"is leap a leap year.")
// }
// else 
// {
// console.log(y,"is not leap year.")
// }


// // Write a program to take 3 numbers from the user and output the second max of 3 numbers.
// // (First, do it in the normal way then do it by using 3 comparisons)
// const inpu=require('readline-sync');
//  let a = inpu.questionInt("Enter a : ");
//  let b = inpu.questionInt("Enter b : ");
//  let c = inpu.questionInt("Enter c : ");
//  if (a>b)
//  {
//     max=a;
//     min=b;
//  }
//  else
//  {
//     max=b;
//     min=a;
//  }
// if (max>c)
// {
//     max1=max;
//     min1=c;
// }
// else
// {
//     max1=c;
//     min1=max;
// }
// if(min>min1)
// {
//     console.log(min);
// }
// else
// {
//     console.log(min1)
// }


// // Q. Write a program to take the basic salary of an employee and calculate its Gross salary according to the following: (Gross salary is the sum of basic salary, HRA, and DRA)
// // Basic Salary <= 10000 : HRA = 20%, DA = 80%
// // Basic Salary <= 20000 : HRA = 25%, DA = 90%
// // Basic Salary > 20000 : HRA = 30%, DA = 95%

// const inpu=require('readline-sync');
// let bs = inpu.questionInt("Enter basic salary : ");

// if (bs<=10000)
// {
//     hra = bs*20/100;
//     da = bs*80/100;
//  gs = bs + hra + da ;
//  console.log(gs);    
// }
// else if ( bs <=20000)
// {
//     hra = bs*25/100;
//     da = bs*90/100;
//  gs = bs + hra + da ;
//  console.log(gs);   
// }
// else 
// {
//     hra = bs*30/100;
//     da = bs*95/100;
//  gs = bs + hra + da ;
//  console.log(gs);   
// }

// // Q. Write a program to input electricity unit charges and calculate the total electricity bill according to the given condition:
// // For the first 50 units Rs. 0.50/unit
// // For the next 100 units Rs. 0.75/unit
// // For the next 100 units Rs. 1.20/unit
// // For units above 250 Rs. 1.50/unit
// // An additional surcharge of 20% is added to the bill

//  const inpu=require('readline-sync');
//  let units = inpu.questionInt("Enter units : ");

// if (units<=50)
// {
//     cost=units*0.50;
//     add= cost*20/100
//     tc = cost + add;
//     // console.log(tc);
// }
// else if (units<=150)
// {
//     cost = 50*0.50+(units-50)*0.75;
//     add= cost*20/100
//     tc = cost + add;
//     // console.log(tc);
    
// }
// else if (units<=250)
// {
//     cost = 50*0.50+100*0.75+(units-150)*1.20
//     add= cost*20/100
//     tc = cost + add;
//     // console.log(tc);
// }
// else
// {
//     cost = 50*0.50+100*0.75+100*1.20+(units-250)*1.50
//     add= cost*20/100
//     tc = cost + add;
//     // console.log(tc);
// }
// console.log(tc);



// //  Q. Write a program to take 4 numbers from the user and output the third max of these 4 numbers.
// // Test Case1:
// // Input:
// // 5
// // 4
// // 6
// // 7
// const inpu=require('readline-sync');
// let a = inpu.questionInt("Enter a : "); //let a=5;
// let b = inpu.questionInt("Enter b : "); //let b= 4;
// let c = inpu.questionInt("Enter c : "); //let c= 6;
// let d = inpu.questionInt("Enter d : "); //let d=7;
// if(a>b)
// {
// max=a;
// min=b;
// }
// else
// {
// max=b;
// min=a;
// }
// if(c>d)
// {
// max1=c;
// min1=d;
// }
// else
// {
// max1=d;
// min1=c;
// }

// if(max>max1)
// {
// max2=max;
// min2=max1
// }
// else
// {
//     max2=max1
//     min2=max
// }
// if (min>min1)
// {
// max3=min
// min3=min1
// }
// else
// {
//     max3=min1
//     min3=min
// }
// if(min2>max3)

// {
// max4=min2
// min4=max3
// }
// else
// {
// max4=max3
// min4=min2
// }
// if(min3>min4)
// {
// console.log( "this is third max = ",min3)
// }
// else
// {
// console.log("this is third max = ",min4)
// }


// // Write a program to take 8 numbers from the user and output the second max of these 8 numbers. (do this in 9 comparision)
// // Test Case1:
// // Input:
// // 5
// // 4
// // 6
// // 7
// // 8
// // 9
// // 2
// // 3
// const inpu=require('readline-sync');
// let a = inpu.questionInt("Enter a : "); 
// let b = inpu.questionInt("Enter b : "); 
// let c = inpu.questionInt("Enter c : "); 
// let d = inpu.questionInt("Enter d : "); 
// let e = inpu.questionInt("Enter e : "); 
// let f = inpu.questionInt("Enter f : ");
// let g = inpu.questionInt("Enter g : ");
// let h = inpu.questionInt("Enter h : ");
// if (a>b)
// {
//     m1=a
//     l1=b
// }
// else
// {
//     m1=b
//     l1=a
// }
// if (c>d)
// {
//     m2=c
//     l2=d
// }
// else
// {
//     m2=d
//     l2=c
// }
// if (e>f)
// {
//     m3=e
//     l3=f
// }
// else
// {
//     m3=f
//     l3=e
// }
// if (g>h)
// {
//     m4=g
//     l4=h
// }
// else
// {
//     m4=h
//     l4=g
// }
// if (m1>m2)
// {
//     m5=m1
//     l5=m2
// }
// else
// {
//     m5=m2
//     l5=m1
// }
// if (m3>m4)
// {
//     m6=m3
//     l6=m4
// }
// else
// {
//     m6=m4
//     l6=m3
// }
// if (m5>m6) //  here get maximum number 
// {
//     // console.log(m5)
//     m7=m5
//     l7=m6
// }
// else
// {
//     //console.log(m5) 
//     m7=m6
//     l7=m5
// }

// if (l1>l2)
// {
//     m8=l1
//     l8=l2
// }
// else
// {
//     m8=l2
//     l8=l1
// }
// if (l3>l4)
// {
//     m9=l3
//     l9=l4
// }
// else
// {
//     m9=l4
//     l9=l3
// }
// if (m8>m9)
// {
//     m10=m8
//     l10=m9
// }
// else
// {
//     m10=m9
//     l10=m8
// }
// if (m10 >l7)  // second
// {
//     console.log(m10);
// }
// else
// {
//     console.log(l7);
// }

// // Write a program to take 5 numbers from the user and print the frequency of every number.

// // Test Case1:
// // Input:
// // 3
// // 4
// // 6
// // 3
// // 6

// // Output:
// // 3 = 2
// // 4 = 1
// // 6 = 2

// const input = require('readline-sync');
// let a=input.questionInt("Enter A : ");
// let b=input.questionInt("Enter B : ");
// let c=input.questionInt("Enter C : ");
// let d=input.questionInt("Enter D : ");
// let e=input.questionInt("Enter E : ");
// let p=1;
// let q=1;
// let r =1;
// let s=1;
// let t=1;
// let v=5;
// if(a==b && b==c && c==a && c==d && d==a && d==b && d==e)
// {
//     console.log(a,"-",v)
// }
// else {if (a==b)
// {
//      p=p+1;
//     // p=a,"-",p;
// }
// else 
// {
//  p=p;
// }
// if (a==c)
// {
//  p=p+1;
//     // p=a,"-",p+1;
// }
// else 
// {
//  p=p;
// }
// if (a==d)
// {
//      p=p+1
//     // p=a,"-",p+1
// }
// else 
// {
//  p=p
// }
// if (a==e)
// {
//      p=p+1
//      console.log(a,"-",p);
//     // p=a,"-",p+1
// }
// else 
// {
//      p=p;
//      console.log(a,"-",p);
// // p=a,"-",1
// }
// if (b==a || b==c || b==d || b==e)
// {
//      // is maching with b==a  so leave it... we can go flase side 
//      if (b==c && b==d && b==e)
//      {
//         console.log(b,"-",4);
//      }
//      else 
//      {
//         if (a==b)
//         {

//         }
//         else
//         {
//         if(b==c && b==d)
//         {
//             console.log(b,"-",3);  
//         }
//         else
//         {
//             if (b==c)
//             {
//                 console.log(b,"-",2);
//             }
//             else
//             {
//                 if(b==e)
//                 {
//                     console.log(b,"-",2);
//                 }
//                 else
//                 {
//                     if (b==d)
//                     {
//                         console.log(b,"-",2);
//                     }
//                     else
//                     {

//                     }
//                 }
//                 }
//             }
//         }
//      }
// }
// else 
// {  //  compare b 
//     // if (b==c)
//     // {
//     //     //  q=q+1;
//     //     //q=b,"-",q;
//     // }
//     // else 
//     // {
//     // q=q;
//     // }
//     // if (b==d)
//     // {
//     //     // q=q+1;
//     //     // q=b,"-",q+1;
//     // }
//     // else 
//     // {
//     // q=q;
//     // }
//     // if (b==e)
//     // {
//         // q=q+1;
//         console.log(b,"-",q);
//         // q=b,"-",q+1;
// }
//     // else 
//     // {
//     //     q=q;
//     //     console.log(b,"-",q);
//     // //  q=b,"-",1
//     // }
//     if(c==b || c==a )
//     {

//          // leave it 
//     }
//     else
//     {
//     if (c==d  && c==e )
//     {
//         console.log(c,"-",3)
//     }
//     else 
//     {
//         if (c==d)
//         {
//             console.log(c,"-",2);
//         } 
//         else 
//         {
//             if (c==e)
//             {
//                 console.log(c,"-",2);
//             }
//         else 
//         {
//             console.log(c,"-",1);
//         }
//     }
//     }
//     // // {
//     //     if (c==d || c==b || c==e )
//     //     {
//     //          // r=r+1;
//     //         // r=c,"-",r;
//     //     }
//     //     else 
//     //     {
//     //      r=r;
//     //     }
//     //     if (c==e)
//     //     {
//     //         r=r+1;
//     //         console.log(c,"-",r);
//     //         // r=c,"-",r+1;
//         }
        
//         // { if (c==a || c==b || c==d || c==e)
//         //     {

//         //     }
//         //     else {
//         //     console.log(c,"-",r);
//         // //    r=r;  
//         //   // r=c,"-",1
//         // }
//     // }
//     //     }
//          if (d==a || d==b || d==c)
//          {
            
//          } 
//          else
//           {
//             if (d==a)
//             {

//             } 
//             else
//             {
//                 if (d==b)
//                 {

//                 }
//                 else
//                 {
//                     if (d==c)
//                     {

//                     }
//                     else
//                     {
//                         if (d==e || d==a || d==c || d==b)
//                         {
//                               if (d==e)
//                               {
//                                 console.log(d,"-",2)
//                               }
//                               else 
//                               {
                                
//                               }
//                         }
//                         else
//                         {
//                             if (d==e)
//                             {
//                                 console.log(d,"-",2);
//                             }
//                             else
//                             {
//                                 console.log(d,"-",1);
//                             }

//                         }
                        
//                     }
//                 }
                
//             }

//           }
//         //     if (d==e)
//         //     {
//         //         console.log(d,"-",2)
//         //     }
//         //     else

        
//         // {
//         //     console.log(d,"-",s)
            
//         //  }
        
        
            
//         //     {
//         //         if (d==e)
//         //         {
//         //             console.log(d,"-",2)
//         //         }

            
//         //     {
//         //         if (d==a)
//         //         {

//         //         }
//         //         else
//         //         {
//         //         console.log(d,"-",s)
//         //         }
//         //             // let s=1;
//         //     }
//         //     }

//                 if (e==a || e==b || e==c || e==d)
//                 {
//                     // console.log("this is a frequency : ")
//                     // console.log(a,"-",p,b,"-",q,c,"-",r,d,"-",s);
//                 }
//                 else
//                 {
                    
//                     console.log(e,"-",t);
//                 // let t=t;
//                 // console.log("this is a frequency : ")

//                 // console.log(a,"-",p,b,"-",q,c,"-",r,d,"-",s,e,"-",t);
//                 // t=e,"-",1;
//                 }

//             // }
//         //  }
        
//     // }

// // }
//             }



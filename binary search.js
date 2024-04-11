// ........binary searching........this is a binary  searching 
const input = require('readline-sync');
let n = input.questionInt("Enter length of array : ");
let i, j, arr=[], m;
let l = 0; // starting index number..
h = n;
for (i=0; i<n; i++)
{
    arr[i]=input.questionInt("enter the element : ");
}
let s = input.questionInt("Enter the matching element : ");
for (i = 0; i < n; i++ )
{
    // m = l + (h-1-l);
    // m = l + h;
    m = l + (h - 1);
    m = Math.floor(m/2);

    if ( arr[m]==s)
    {
        console.log("yes");
        break;
    }
    else
    {
        if ( s > arr[m])
        {
            l = m+1;
        }
        else
        {
            // l = m -1; // this is no calculate here
            h = m -1;
        }
    }
    if (arr[m]!==s)
    {
        m=m+1;
    }

}
if ( arr[m]==s)
{
    console.log("index Number :",m,",this is seaching element :",arr[m]);
}
else 
{
    // console.log("this is wronge seaching element :",arr[m],",index Number : ",m);
    console.log("this is wronge seaching element\n       not found");

}
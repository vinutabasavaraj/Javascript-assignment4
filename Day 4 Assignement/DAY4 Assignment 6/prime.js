console.log("Prime number program")

let n = prompt("Enter the n value");

let i;
for(let n1 = 2; n1 <= n; n1++)
{
    for( i = 2; i <=(n1/2); i++)
    {
        if(n1 % i == 0)
        {
            i = n1;
            break;
        }
    }
    if(i!=n1)
    {
        console.log(n1);
    }
}
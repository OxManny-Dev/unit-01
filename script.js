
// script.js
// Steven Reed 09/11/2023

// TASK write code that counts from 0 to n s.t. n is a user input number

let countToN = function(n)
{
    // exception handling for negative or non-number values
    if (n < 0 || typeof n == NaN)
    {
        console.log("Whoops! Invalid option");
    } // end if
    else
    {
        // loop from 0 to the user input value (inclusive)
        for (let i = 0; i <= n; i++)
        {
            console.log(i);
        }
    } // end else
}


let toCountTo = prompt("enter how long to count for!");

countToN(toCountTo);

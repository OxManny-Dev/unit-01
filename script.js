
// script.js
// Steven Reed 09/11/2023

// TASK write code that counts from 0 to n s.t. n is a user input number

let toCountTo = prompt("enter how long to count for!");

// exception handling for negative or non-number values
if (toCountTo < 0 || typeof toCountTo == NaN)
{
    console.log("Whoops! Invalid option");
} // end if
else
{
    // loop from 0 to the user input value (inclusive)
    for (let i = 0; i <= toCountTo; i++)
    {
        console.log(i);
    }
} // end else


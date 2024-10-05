//Loop through each element of the array and do the operation you have passed in the call 
//back function and hold the result from each operation in an array and finally returns you 
//the array

numbers=[3,5,6,7,8,9];

function doubleIt(num)
{
    // console.log(num);
    return num*2;
}

const double2 = (num)=>num*2;




//1.
const answer=numbers.map(doubleIt);
//2.
const answer2=numbers.map(double2);
//3.
const answer3=numbers.map(n =>n*2);

console.log(answer);
console.log(answer2);
console.log(answer3);
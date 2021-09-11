//Step 1
let ages = [3,9,23,64,2,8,28,93]
console.log(ages);
let lastElement = ages[ages.length - 1];
let firstElement = ages[0];
console.log(lastElement - firstElement);
ages.push(10);
console.log(lastElement - firstElement);
function average(ages) {
    let sum = 0
    for (let i = 0; i < ages.length; i++) {
        sum += ages[i];
    } 
    return sum / ages.length;
}
console.log(average(ages));
//Step 2
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
console.log(names);
let sum = 0
for (let i = 0; i < names.length; i++) {
    sum = sum + names[i].length;}
    console.log(sum/names.length)
    ;
let join = names[0]
for (let i =1; i < names.length; i++) {
join = join.concat(" ",names[i]);
}
console.log(join);
//Step 3 How to access the last element of any array
//Create array, create variable name lastElement and assign lastElement's index as 1 less than the length of the array, print lastElement.
//Example 
let array = [2,4,6]
let lastElement = array[array.length - 1];
console.log(lastElement);
//Step 4 How to access the first element of any array
//Create array, create variable firstElement and assign index as 0 since arrays in JavaSCript are zero-based, print firstElement.
//Example
let array = [2,4,6]
let firstElement = array[0];
console.log(firstElement);
//Step 5
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']
let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths[i] = names[i].length;
}
//Step 6
let sum = 0 
for (let i = 0; i < nameLengths.length; i++) {
    sum = sum + nameLengths[i];
}
console.log(sum)
//Step 7
function compile(word, n) {
return word.repeat(n);
}
console.log(compile("Nice", 4));
//Step 8
function fullname(firstName, lastName) {
    return (firstName + " " + lastName);
}
console.log(fullname("Vu", "Truong"));
//Step 9
let arrayofnum = [14, 18, 35, 37, 28]
function checkarray(arrayofnum) {
    let sum = 0
    for (let i = 0; i < arrayofnum.length; i++) 
    {sum = sum + arrayofnum[i];
    }
    if (sum >100) {
        return true;
    }
    else {return false;}
}
console.log(checkarray(arrayofnum));
//Step 10
let arrayofnumbers = [4,8,12,16]
function average(arrayofnumbers) {
    let sum = 0; for (let i = 0; i < arrayofnumbers.length; i++) {
        sum = sum + arrayofnumbers[i];
    }
    return (sum/arrayofnumbers.length);}
    console.log(average(arrayofnumbers));
//Step 11
let a = [10,20,30]
let b = [3,15,25]
function average(a) {
    sum = 0; 
    for(i = 0; i < a.length; i++)
    {sum = sum + a[i]};
return(sum/a.length);}
console.log(average(a));
function average(b) {
    sum = 0; 
    for(i = 0; i < b.length; i++)
    {sum = sum + b[i]};
    return(sum/b.length);}
console.log(average(b));
 function compare(a, b) {
    if (average(a) > average(b)) {
        return true;
    }
    else
    {
        return false;
    }
}
console.log(compare(a, b)); 
//Step 12
let isHotOutside = true;
let moneyInPocket = 35;
function willBuyDrink(isHotOutside, moneyInPocket) {
    if(isHotOutside == true && moneyInPocket >=10.5) {
        return true;
    } else {
        return false;
    }
} console.log(willBuyDrink(isHotOutside, moneyInPocket));
//Step 13 Custom function for perimeter of a square with side length 3
let length = 3
function perimeterofsquare(length) {
    return (4 * length);
}
console.log(perimeterofsquare(length));
//I created this function to calculate the perimeter of a square using the multiplication operator.
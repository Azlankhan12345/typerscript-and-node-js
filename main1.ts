//Name Causes : Store a person's name in a varriable, and then print that print that person,s name in lowercase, uppercase, and tittlecase.

let personal_Name: string = "Azlan KHAN";

// In lowercase

//console.log("lowercase:", personalName.toLowerCase());

// In uppercase

//console.log("uppercase:", personalName.toUpperCase());

 //In Titlecase

console.log("Title case:", personalName.replace(/\b\w/g, c => c.toUpperCase()));

//let quote: string = "A person who never made a mistake never tried anything new.";
//let author: string = "Albert Einstein";

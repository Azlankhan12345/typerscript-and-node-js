//*Print your array in its original order

var place = ['cape town','delhi','fasialbad','bankot', 'ahmedabad'];
console.log('orignal'+ place);

//*print your array in alphabetical order without modify the actual list.
console.log('orignl :' + place);

//* Show that your array isstill in its orignal order by printing it.
console.log('orignal :' + place);

//* Print your array in reverse alphabetical order without changing the order of the of the order list
console.log('copy ' + [...place].sort().reverse());

//* Show that you array is still in its orignal order by printing it again. 
console.log('copy ' + [...place].sort().reverse());

//* Reverse the order of your list. print the array to show that its order has changed.
console.log('orignal :' + place.sort());

//* Reverse the order of your list agin. print the list to show its back to its orignal order
console.log('orignal :' + place.sort());

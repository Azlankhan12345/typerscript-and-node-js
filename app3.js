// Task 16
var guest_Arr = ["Ali", "Haseeb", "Ahmed", "Azlan"];
var can_Not_Attend = "Ali";
var n_ew_G_uest = "Hammad";
guest_Arr[guest_Arr.indexOf(can_Not_Attend)] = 'newGest';
guest_Arr.map(function (item) {
    console.log("Dear ".concat(item, ", you are invited to the dinner."));
});
// Additional Task
var guest_list = ['shaheen', 'fakhar', 'rizwan']; // Corrected initialization
//for (let i = 0; i < guest_list.length; i++) {
// console.log(`Respected sir/Madam ${guest_list[i]}, you are invited to the dinner tomorrow.`);
//}
console.log('\nUnfortunately we can not arrange big table , Only two people allows.');
while (guest_list.length > 2) {
    var remove_guest = guest_list.pop();
    console.log("Respected sir/Madam ".concat(remove_guest, " you are invited to the dinner tomorrow."));
}
for (var i = 0; i < guest_list.length; i++) {
    console.log("Respected sir/Madam ".concat(guest_list[i] + '\nYes you are still invited on tomorrow dinner\nThank you\n'));
}
guest_list.splice(0, 2);
console.log(guest_list);

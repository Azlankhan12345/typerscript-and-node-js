// Task 15
var guest_Arr = ["Ali", "Haseeb", "Ahmed", "Azlan"];
var canNot_Attend = "Ali";
var new_Guest = "Hammad";
guest_Arr[guest_Arr.indexOf(canNot_Attend)] = new_Guest;
guest_Arr.map(function (item) {
    console.log("Dear ".concat(item, ", you are invited to the dinner."));
});

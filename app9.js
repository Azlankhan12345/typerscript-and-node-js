var name_1 = "Azlan";
var name_2 = "Azlan khan";
var name_3 = "Sir Azlan";
if (name_1 == name_3) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
if (name_1 != name_2) {
    console.log("names are equal");
}
else {
    console.log("names are not equal");
}
var age_1 = 18;
var age_2 = 22;
if (age_1 == 18) {
    console.log("eligible for vote");
}
if (age_1 == 22) {
    console.log("eligible for vote in older category");
}
if (age_1 <= age_2) {
    console.log("younger");
}
if (age_2 >= age_1) {
    console.log("older");
}
if (age_1 == 18 && age_2 == 22) {
    console.log("person is eligible for vote");
}
if (age_1 == 18 || age_2 != 22) {
    console.log("person is eligible for vote");
}
var country = ["pakistan", "india", "japan", "china"];
if (country.includes("pakistan")) {
    console.log("pakistan is a country list");
}
if (country.includes("america")) {
    console.log("america is not include is an array");
}

let users: string[] = ['admin', "eric", "haseeb", "ali", "fatima"];

for (let user of users) {
    if (user === "admin") {
        console.log("hello admin, would you like to see a status report?");
    } else {
        console.log(`hello ${user}, thank you for logging in again`);
    }
}

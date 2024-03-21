function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}

function showmagicians(magicians: string[]): void {
    for (const magician of magicians) {
        console.log(magician);
    }
}

const magicians2: string[] = ["Usman", "Rizwan", "Babar"];
make_great(magicians2);
show_magicians(magicians2);






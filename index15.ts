// TASK 1
// Installation completed

type Car = {
    manufacture: string;
    model: string;
    [key: string]: any;
};

function createCar(manufacture: string, model: string, optional: Record<string, any>): Car {
    return {
        manufacture,
        model,
        ...optional
    };
}

const myCar: Car = createCar("Toyota", "Corolla", { color: "Silver", year: "2024" });
console.log(myCar);

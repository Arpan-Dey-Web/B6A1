// solution file 
// problem --> 1
function formatValue(value: string | number | boolean) {

    if (typeof value === "string") {
        return value.toLocaleUpperCase()
    } else if (typeof value === "number") {
        return value * 10;
    } else if (typeof value === "boolean") {
        return !value
    }
    else {
        return;
    }
}

// problem --> 2

function getLength(value: string | any[]) {
    if (typeof value === "string") {
        return value.length
    }
    if (Array.isArray(value)) {
        return value.length;
    }
}

// problem --> 3

class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`
    }
}





function formatValue(value: string | number | boolean): string | number | boolean {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else if (typeof value === "number") {
        return value * 10;
    }
    else if (typeof value === "boolean") {
        return !value;
    }
    return value;
}

function getLength(value: string | any[]): number {
    if (typeof value === "string") {
        return value.length;
    }
    if (Array.isArray(value)) {
        return value.length;
    }
    return 0;
}


class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    getDetails(): string {
        return `'Name: ${this.name}, Age: ${this.age}'`;
    }
}



type BookType = { title: string; rating: number }

function filterByRating(value: BookType[]): BookType[] {
    const newBooks = value.filter(element => element.rating >= 4);
    return newBooks;
}

type usersData = { id: number; name: string; email: string; isActive: boolean }
function filterActiveUsers(value: usersData[]): usersData[] {
    const activeUsers = value.filter(element => element.isActive === true);
    return activeUsers;
}



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}

function printBookDetails(value: Book): string {
    const { title, author, publishedYear, isAvailable } = value;
    return `Title: ${title}, Author: ${author}, Published: ${publishedYear}, Available: ${isAvailable ? "Yes" : "No"}`;
}


function getUniqueValues(
    arr1: (string | number)[],
    arr2: (string | number)[]
): (string | number)[] {

    let result: (string | number)[] = [];

    
    for (let i = 0; i < arr1.length; i++) {
        const value = arr1[i];
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === value) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result = [...result, value];  
        }
    }

  
    for (let i = 0; i < arr2.length; i++) {
        const value = arr2[i];
        let exists = false;

        for (let j = 0; j < result.length; j++) {
            if (result[j] === value) {
                exists = true;
                break;
            }
        }

        if (!exists) {
            result = [...result, value];
        }
    }

    return result;
}






type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};
function calculateTotalPrice(value: Product[]): number {
    if (value.length === 0) return 0;

    return value
        .map(product => {
            const base = product.price * product.quantity;
            if (product.discount) {
                const discountAmount = (base * product.discount) / 100;
                return base - discountAmount;
            }
            return base;
        })
        .reduce((sum, current) => sum + current, 0);
}




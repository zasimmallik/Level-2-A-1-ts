function formatString(input: string, toUpper?: boolean): string {
  return toUpper !== false ? input.toUpperCase() : input.toLowerCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
  return items.filter(item => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.reduce((result, current) => [...result, ...current], [] as T[]);
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo(): string {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel(): string {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  if (typeof value === 'string') {
    return value.length;
  } else {
    return value * 2;
  }
}


interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) {
    return null;
  }
  
  return products.reduce((mostExpensive, current) => {
    return current.price > mostExpensive.price ? current : mostExpensive;
  }, products[0]);
}


enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) {
    return "Weekend";
  } else {
    return "Weekday";
  }
}


async function squareAsync(n: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (n < 0) {
        reject(new Error("Negative number not allowed"));
      } else {
        resolve(n * n);
      }
    }, 1000);
  });
}

// Example usage

console.log(formatString("Hello"));         
console.log(formatString("Hello", true));   
console.log(formatString("Hello", false));

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];
console.log(filterByRating(books));

console.log(concatenateArrays(["a", "b"], ["c"]));
console.log(concatenateArrays([1, 2], [3, 4], [5]));

const myCar = new Car("Toyota", 2020, "Corolla");
console.log(myCar.getInfo());
console.log(myCar.getModel());

console.log(processValue("hello"));
console.log(processValue(10));

const products = [
  { name: "Pen", price: 10 },
  { name: "Notebook", price: 25 },
  { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));

console.log(getDayType(Day.Monday));
console.log(getDayType(Day.Sunday));

squareAsync(4).then(result => console.log(result));
squareAsync(-3).catch(error => console.error(error.message));
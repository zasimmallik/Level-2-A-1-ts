 1. What is the use of the keyof keyword in TypeScript?
 
The keyof keyword is used to get the keys (property names) of a type as a union of string literals. It helps make your code safer by allowing only valid keys to be used.

 * Example:
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; // "name" | "age"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = { name: "Zasim", age: 21 };
console.log(getValue(user, "name")); //  Works
// getValue(user, "email");  Error: "email" is not a key of User

 Why it's useful:
Prevents typing wrong keys.

Makes code reusable and type-safe.

Great for utility functions or dynamic access.


 2. How does TypeScript help in improving code quality and project maintainability?

TypeScript adds types to JavaScript, which helps you catch mistakes early and write more reliable code.

 Here's how it helps:

Catches errors early: You get warnings during development, before running the code.

Better autocomplete: Your editor suggests correct methods and variables.

Safer refactoring: When you rename something, TypeScript checks where it's used.

Clearer code: Types make the code easier to understand for you and your team.

Scales better: In bigger projects, it’s easier to manage and avoid bugs.

 * Simple Example:
function greet(name: string) {
  return "Hello, " + name.toUpperCase();
}

greet("Zasim"); //  OK
greet(123);     //  Error: number is not assignable to string

So, TypeScript makes your code cleaner, easier to manage, and less likely to break.
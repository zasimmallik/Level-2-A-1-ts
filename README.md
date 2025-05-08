### 1. What is the use of the `keyof` keyword in TypeScript?

The `keyof` keyword extracts the keys (property names) of a type as a union of string literals. It helps make your code safer by allowing only valid keys to be used.

## Example:

```ts
type User = {
  name: string;
  age: number;
};

type UserKeys = keyof User; // "name" | "age"

function getValue(obj: User, key: UserKeys) {
  return obj[key];
}

const user: User = { name: "Zasim", age: 21 };
console.log(getValue(user, "name")); // Works
// getValue(user, "email"); // Error: "email" is not a key of User
```

## Why it's useful:

* Prevents typing invalid keys
* Makes code reusable and type-safe
* Ideal for utility functions and dynamic property access

---

### 2. How does TypeScript help improve code quality and project maintainability?

TypeScript adds static types to JavaScript, helping you catch errors early and write more robust code.

## Here's how it helps:

* Catches errors: early Detects mistakes during development, before runtime
* Better autocomplete: Your editor suggests valid methods and variables
* Safer refactoring: Renaming variables or functions updates all references correctly
* Clearer code: Types make the code easier to understand
* Scales better: Ideal for managing large projects and reducing bugs


## Simple Example:

```ts
function greet(name: string) {
  return "Hello, " + name.toUpperCase();
}

greet("Zasim"); // OK
greet(123);     // Error: number is not assignable to string
```

TypeScript helps you write cleaner, safer, and more maintainable code.

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const oop = [
  {
    name: "Class Instantiation",
    difficulty: "Easy",
    subject: "OOP",
    description: "This example demonstrates how to create an instance of a class. Here, a Dog class is instantiated with a name.",
    code: `
      class Dog {
        constructor(name) {
          this.name = name;
        }
      }
      const myDog = new Dog('Buddy');
      console.log(myDog.name);
    `,
  },
  {
    name: "Simple Method",
    difficulty: "Easy",
    subject: "OOP",
    description: "This snippet shows how to define and call a method in a class. A Cat class has a method to make it meow.",
    code: `
      class Cat {
        meow() {
          return 'Meow';
        }
      }
      const myCat = new Cat();
      console.log(myCat.meow());
    `,
  },
  {
    name: "Basic Object Creation",
    difficulty: "Easy",
    subject: "OOP",
    description: "This example illustrates creating a simple object using a class. A Person class is created with a name property.",
    code: `
      class Person {
        constructor(name) {
          this.name = name;
        }
      }
      const john = new Person('John');
      console.log(john.name);
    `,
  },
  {
    name: "Method Overriding",
    difficulty: "Medium",
    subject: "OOP",
    description: "In this snippet, a Dog class overrides the sound method of its parent class Animal, showcasing polymorphism.",
    code: `
      class Animal {
        sound() {
          return 'Some sound';
        }
      }
      class Dog extends Animal {
        sound() {
          return 'Bark';
        }
      }
      const myDog = new Dog();
      console.log(myDog.sound());
    `,
  },
  {
    name: "Encapsulation",
    difficulty: "Medium",
    subject: "OOP",
    description: "This example illustrates encapsulation by using a private field for the balance in a BankAccount class.",
    code: `
      class BankAccount {
        #balance;
        constructor(initialBalance) {
          this.#balance = initialBalance;
        }
        getBalance() {
          return this.#balance;
        }
      }
      const account = new BankAccount(${getRandomInt(0, 100)});
      console.log(account.getBalance());
    `,
  },
  {
    name: "Static Methods",
    difficulty: "Medium",
    subject: "OOP",
    description: "This snippet demonstrates the use of static methods within a class. The MathUtils class provides a static method to add two numbers.",
    code: `
    class MathUtils {
      static add(a, b) {
        return a + b;
      }
    }
    const num1 = ${getRandomInt(0, 10)};
    const num2 = ${getRandomInt(0, 10)};
    console.log(MathUtils.add(num1, num2));
    `,
  },
  {
    name: "Inheritance",
    difficulty: "Hard",
    subject: "OOP",
    description: "This snippet demonstrates inheritance where Car extends Vehicle, gaining its properties and methods.",
    code: `
      class Vehicle {
        constructor(brand) {
          this.brand = brand;
        }
        drive() {
          return \`\${this.brand} is driving\`;
        }
      }
      class Car extends Vehicle {
        constructor(brand, model) {
          super(brand);
          this.model = model;
        }
        drive() {
          return \`\${this.brand} \${this.model} is driving\`;
        }
      }
      const myCar = new Car('Toyota', 'Corolla');
      console.log(myCar.drive());
    `,
  },
  {
    name: "Abstract Class",
    difficulty: "Hard",
    subject: "OOP",
    description: "This example shows the use of an abstract class Shape that requires subclasses to implement the area method.",
    code: `
      class Shape {
        area() {
          throw new Error("Method 'area()' must be implemented.");
        }
      }
      class Circle extends Shape {
        constructor(radius) {
          super();
          this.radius = radius;
        }
        area() {
          return Math.PI * this.radius ** 2;
        }
      }
      const myCircle = new Circle(${getRandomInt(1, 10)});
      console.log(myCircle.area());
    `,
  },
  {
    name: "Polymorphism",
    difficulty: "Hard",
    subject: "OOP",
    description: "This snippet showcases polymorphism through the Shape class and its subclass Square.",
    code: `
      class Shape {
        area() {
          return 0;
        }
      }
      class Square extends Shape {
        constructor(side) {
          super();
          this.side = side;
        }
        area() {
          return this.side * this.side;
        }
      }
      const mySquare = new Square(${getRandomInt(1, 10)});
      console.log(mySquare.area());
    `,
  },
  {
    name: "Composition over Inheritance",
    difficulty: "Medium",
    subject: "OOP",
    description: "This example illustrates composition by showing a Car class that contains an Engine instance.",
    code: `
      class Engine {
        start() {
          return 'Engine started';
        }
      }
      class Car {
        constructor() {
          this.engine = new Engine();
        }
      }
      const myCar = new Car();
      console.log(myCar.engine.start());
    `,
  },
  {
    name: "Getters and Setters",
    difficulty: "Medium",
    subject: "OOP",
    description: "This example demonstrates how to use getters and setters to encapsulate properties in a class.",
    code: `
      class Person {
        constructor(name) {
          this._name = name;
        }
        get name() {
          return this._name;
        }
        set name(newName) {
          this._name = newName;
        }
      }
      const person = new Person('Alice');
      console.log(person.name);
    `,
  },
];

export default oop;

# Code Challenge

### 1. What is and what is it used code review?

Code review is a way to improve as developers and to collaborate between a team of developers. By reviewing code between developers, other developers can give suggestions on better ways to make some features or catch some scenarios that we didn't think. Also, this helps us to improve the quality of the codebase.

### 2. What are the access levels, and how do they work? (Modifiers)

The access levels help to change who can call a method or get/set a variable. The existing access levels are:

-   [**Private**](./classes/PepperoniPizza.ts#L5): This modifier makes a variable or method only available for the class which contains it.

-   [**Public**](./classes/Pizza.ts#L53): This modifier makes a variable or method available for everyone, inheritance class or object instance.

-   [**Protected**](./classes/Pizza.ts#L18): This modifier makes a variable or method only accessible through the inheritance classes and cannot access by the instantiator.

### 3. What architecture patterns do you know and how they work?

### 4. What design patterns do you know and how they work?

### 5. What is SOLID?

It's an acronym for five principles in OOP(Object Oriented Programming).

- **S – Single Responsibility Principle**: This principle means that a class should have a unique responsibility, so the class is simple (KISS principle).

- **O – Open/Closed Principle**: This principle is to leave a class in a way that is open to be extended for but closed to modifications.

- **L – Liskov Substitution Principle**: This principle is related to keeping the superclass in a way that I can substitute its subclasses for the superclass and not affect the program at all.

- **I – Interface Segregation Principle**: For this principle, we need to create for the class the necessary interfaces that are going to use.

- **D – Dependency Inversion Principle**: This principle refers to keep the principle classes in a way that they are not dependent on the subclasses. To leave the superclass generic, and the subclasses more specific.
### 6. [What is a class?](./classes/Pizza.ts#L15-L73)

A class is a way to build general functionality related to a specific type, for example, a car. <br />
Classes help us create blueprints, with their variables and methods, which can be extended to other classes or instantiated to an object.

### 7. [What is, and what is it used inheritance?](./classes/PepperoniPizza.ts#L3)

Inheritance is a way to extend classes by to different children some methods or variables. <br />
With inheritance, you can create a child class that will have access to the parent variables and methods.

### 8. [What is, and what is it used interfaces?](./classes/Pizza.ts#L10-L16)

An interface is a representation of what a class can do, this helps to determine what methods are necessary for the class.

### 9. [What is polymorphism?](./classes/PepperoniPizza.ts#L14-L19)

Polymorphism happens when we have many classes related to another class. It is when you inherit a class to many classes.
Then we can use the parent methods to mutate it to do different tasks. So we can perform the same action in different ways.

### 10. [What is and how does a Web API work?](./pages/Orders/Orders.tsx#L29-L45)

It's an application programming interface used to fetch data from a server. These are general services for specific functions, and each service has its data structure. Web APIs work with the HTTP protocol and make it easier to connect different applications. The way it works is that the application makes a request to the server, and then the server returns a response with some data.

### 11. What tools can use to test Web APIs??

-   [**Postman**](https://www.postman.com/): Postman is the most popular tool for testing web APIs. It's a free desktop application that gives the ability to make all types of HTTP requests(GET, POST, PUT, DELETE) simply. Its intuitive interface gives the developers an easy way to test its endpoints.

### 12. What tool have you used for error handling?

-   [**Promise catch method**](./components/card/card.tsx#L69-L73) <br />
    Promises have a method `catch()` which executes when a promise is rejected and receives an argument with the rejection reason.

-   [**Try/Catch**](./components/card/card.tsx#L56-L78) <br />
    The try/catch statement is used to try to run a block of code, and if a part of that code throws an exception, the statement `catch()` is run and receives the argument with the error so we can handle the exception there.

### 13. [TDD](./components/button/button.test.tsx)

Test-driven development is a programming practice where the developer writes first the tests for the component, typically unit tests, then the developer writes the code for the component to satisfy the tests, and finally, the developer starts to refactor the code to remove all unnecessary code and runs the tests again.

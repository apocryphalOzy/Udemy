# High level overview of JavaScript

### JavaScript

: JavaScript is a high-level, prototype-based object oriented, multi-paradigm, interpreted or just-in-time compiled, dynamic, single threaded, garbage-collected programming language with first-class functions and a non blocking event loop concurrency model

### High-Level

: High level languages such as python and javascript do not need to manage resources manually like RAM and computing power. These languages have so-called abstractions to take care of all of this work for us

### Garbage-Collected

: Is an algorithm inside the JavaScript engine that automatically removes old, unused objects from the computer memory in order not to clog it up with unnecessary stuff.

### Interpreted or just-in-time compiled

: Every program needs to be written in machine code(zeros and ones). We write JavaScript code which is an abstraction over machine code that eventually becomes translated into machine code. This step can be either compiled or interpreted. In this case, the JavaScript is interpreted or compiled in the JavaScript engine.

### Multi-Paradigm

: A paradigm is an approach and an overall mindset of structuring our code which will ultimately direct the coding style and technique in a project that uses a certain paradigm. We can also define paradigms as imperative or declarative.

_Popular Paradigms_

1. Procedural programming
   - what JavaScript is. We are organizing code in a linear way with some functions in between.
2. Object-oriented programming (OOP)
3. Functional programming (FP)

### Prototype-based object-oriented

: Everything in JavaScript is an object except for primitive values such as numbers, strings, bigint, booleans, undefined and symbols.
: Arrays are an object and we can use the push method/property on an array. These arrays come from an array blueprint. A template that is called a prototype. This is also called prototypal inheritance.
: The prototype contains all the array methods and the arrays that we create in our code. We then inherit the methods from the blueprint so that we can use them on our arrays.
![oversimplified array prototype](C:\Users\jeremy\Desktop\Projects\Udemy\Updated-Complete-JavaScript-Course-2020\08-Behind-the-Scenes\oversimplifiedPrototype.jpg)

### First-class functions

: JavaScript is a language with first-class functions. This means that the functions are simply **treated as variables.** We can pass them into other functions and return them from functions.

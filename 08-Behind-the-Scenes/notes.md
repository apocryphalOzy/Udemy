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

![oversimplified array prototype](https://raw.githubusercontent.com/dulcetdiver/Udemy/staging_branch/08-Behind-the-Scenes/images/oversimplifiedPrototype.JPG)

### First-class functions

: JavaScript is a language with first-class functions. This means that the functions are simply **treated as variables.** We can pass them into other functions and return them from functions.

![First Class function examples](https://raw.githubusercontent.com/dulcetdiver/Udemy/staging_branch/08-Behind-the-Scenes/images/firstClassFunctionExample.JPG)

### Dynamic

: JavaScript is a dynamic language which actually means dynamically-typed. For example, we dont assign data types to variables. Variable data types dont become known until the JS engine executes our code. The type of variables can be easily changed as we reassign them.

: C, Java and Ruby are all languages you must declare data types to variables. TypeScript is JS with types.

![dynamically typed language](https://raw.githubusercontent.com/dulcetdiver/Udemy/staging_branch/08-Behind-the-Scenes/images/dynamiclanguage.JPG)

### Non-Blocking event loop concurrency model

: A concurrency model is how the JS engine handles multiple tasks happening at the same time.

: Event loop takes long running tasks and executes them in the "background" and puts them back in the main thread once they are finished.

### Single-Threaded

: The reason we need a concurrency model is because JS runs in one **single thread**, so it can only do one thing at a time.

: A thread is like a set of instructions that is executed in the computers CPU. So, the thread is where our code is actually executed in a machine's processor.

![Single Threaded Non Blocking Event Loop Concurrency Model](https://raw.githubusercontent.com/dulcetdiver/Udemy/staging_branch/08-Behind-the-Scenes/images/singleThreadedNonBlockingEventLoopConcurrencyModel.JPG)

---

### What is a JS engine?

: a JS engine is a program that **executes** JS code.

: every browser has it own JS engine. THe most well known engine is Googles V-Eight engine. The v eight engine powers google chrome, but also node.js which is the JS runtime software.

: the JS engine always contains something called the 'call stack' and a 'heap'

    - the call stack is where our code is actually executed using something called execution context
    - the heap is an unstructured memory pool which stores all the objects that our application needs.

![JS engine - empty call stack and heap]()

### Compilation Vs. Interpretation

: **Compilation** is where the entire code is converted into machine code at once, and written to a binary file that can be executed by a computer.

: **Interpretation** runs through the source code and executes it line by line. The problem with interpreted languages is that they are much slower than compiled languages.

: JS now uses something called **just-in-time (JIT) compilation**. The entire code in JIT is converted into machine code at once, then executed immediately

![Compilation Vs. Interpretation]()

### Just-in-time compilation of JS

: Code is parsed into a data structure called the abstract syntax tree or AST. This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors. The resulting tree will later be used to generate machine code.

: The next step is compilation which takes the AST and compiles it into machine code. The machine code then gets executed right way because of JS just in time compilation.

: The JS engine then creates a very unoptimized version of machine code in the beginning so it can start executing as fast as possible. Then in the background, this code is being optimized and recompiled during the already running program execution.

: this is what makes modern browser engines so fast. All this parsing, compilation adn optimization happens in some special threads inside the engine that we cannot access from our code. So separate from the main thread that is basically running into a call stack executing our own code. Different engines implement in slightly different ways, but this si what most JIT compilation looks like for JS.

![JIT Compilation]()

### JavaScript Runtime

: We can imagine a JS runtime as a big box or a big container which includes all the things that we need in order to use JavaScript. In the heart of any JS runtime there is always a JS engine. **Without an engine there is no runtime and then there is no JavaScript at all**.

: The engine alone is not enough. In order to work properly, we also need to access the web APIs. So everything related to the DOM, timers, and console logs. Essentially web APIs are functionalities provided to the engine, but no part of the JS language itself. JS simply gets access to these APIs through the global window object. It still makes sense that the web APIs are also part of the runtime because a runtime is just like a box that contains all the JS related stuff that we need.

: a JS runtime also contains something called the **callback queue**. This is a data structure that contains all the callback functions that are ready to be executed.

    - For example we attach event handler functions to DOM elements like a button to react to certain events. These event handler functions are also called callback functions.
    - as the event happens (e.g: click event) the callback function will be called. The callback functions is put into the callback queue. When the stack is empty the callback function is passed to the stack so that it can be executed. This happens by something called the event loop. The event loop takes the callback functions from the callback queue and puts them in the call stack so that they can be executed.

![JS runtime]()

: This is what the JS runtime environment looks like outside of the browser.

: It's pretty similar, but since we don't have a browser, we can't have web APIs because it's the browser who provides these. Instead we have multiple C++ bindings and a so called thread pool.

![JS runtime in node.js]()

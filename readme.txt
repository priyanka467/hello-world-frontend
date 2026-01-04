 What is Emmet?
● Difference between a Library and Framework?
● What is CDN? Why do we use it?
● Why is React known as React?
● What is crossorigin in script tag?
● What is diference between React and ReactDOM
● What is difference between react.development.js and react.production.js files via CDN?
● What is async and defer? - see my Youtube video ;

1️⃣ What is Emmet?

Emmet is a shortcut syntax that helps you write HTML/CSS faster in editors like VS Code.
eg: div>h1+p ==> expands to 
<div>
  <h1></h1>
  <p></p>
</div>

2️⃣ Difference between Library and Framework

This is a very important interview question.

Library (React)
-> You call the library
-> You control the flow
-> Used when you need help
eg React.createElement()

Framework (Angular)
Framework calls your code
-> It controls the flow
-> You must follow its rules

📌 Memory line (Golden 🔑)

Library = You call it
Framework = It calls you

3️⃣ What is CDN? Why do we use it?

CDN (Content Delivery Network)
= Servers distributed across the world that deliver files faster.
eg: <script src="https://unpkg.com/react@18/umd/react.development.js"></script>

🧠 Why CDN?

-> Faster loading
-> No installation needed
-> Browser caching


📌 Memory line

CDN = load files from nearest server

4️⃣ Why is React called React?

Because React reacts to state changes.

When data changes:
-> React updates UI automatically
-> Only changed parts re-render

🧠 Example: state change → UI updates

5️⃣ What is crossorigin in <script> tag?

Used when loading files from another domain.

Example: <script crossorigin src="..."></script>
🧠 Why needed?
-> Security (CORS)
-> Error handling
-> Enables proper error messages

📌 Memory line

crossorigin handles cross-origin security rules

6️⃣ Difference between React and ReactDOM
React
-> Core library
-> Creates elements
-> Handles logic & state

ReactDOM
-> Talks to the browser
-> Renders React elements into DOM

example:
React.createElement()
ReactDOM.createRoot().render()

📌 Memory line

React = what to build
ReactDOM = where to show

7️⃣ Difference between

react.development.js vs react.production.js

Development build
-> Bigger size
-> Warnings & errors
-> Helpful for learning

Production build
-> Smaller
->Faster
-> No warnings

📌 Memory line

Development = debugging
Production = performance

8️⃣ What is async and defer?
-> Used in <script> loading.

Normal script
-> Blocks HTML parsing

async
-> Loads script in parallel
-> Executes immediately when ready
-> Order not guaranteed

defer
-> Loads in parallel
-> Executes after HTML parsing
-> Order maintained

📌 Memory line (Super important)
async = fast but unordered
defer = safe and ordered


Introducing React.
Q ) What is React? Why React is known as ‘React’?
React is a JavaScript Library. The name ‘React’ was chosen
because the library was designed to allow developers to react
to changes in state and data within an application, and to
update the user interface in a declarative and efficient
manner.
Q ) What is Library?
Library is a collections of prewritten code snippets that can
be used and reused to perform certain tasks. A particular
JavaScript library code can be plugged into application code
which leads to faster development and fewer vulnerabilities to
have errors.
Examples: React, jQuery
Q ) What is Framework?
Framework provides a basic foundation or structure for a
website or an application.
Inception! ( Namaste-React ) 3
Examples: Angular
Q ) Similarities between Library and Framework?
Frameworks and libraries are code written by third parties to
solve regular/common problems or to optimise performance.
Q ) Difference between Library and Framework?
A key difference between the two is Inversion of control. When
using a library, the control remains with the developer who
tells the application when to call library functions. When
using a framework, the control is reversed, which means that
the framework tells the developer where code needs to be
provided and calls it as it requires.

* Emmet:
Emmet is the essential toolkit for web-developers. It allows you
to type shortcuts that are then expanded into full-fledged boiler plate code for writing HTML and CSS

* Cross Origin:
 The crossorigin attribute in the script tag enables CrossOrigin Resource Sharing (CORS) for loading external JavaScript
files from different origin than the hosting web page. This
allows the script to access resources from the server hosting
the script, such as making HTTP requests or accessing data.
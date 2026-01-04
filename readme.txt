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

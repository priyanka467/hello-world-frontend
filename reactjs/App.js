//   import React from "react";
// import ReactDOM from "react-dom/client";
  
  
        // const heading = React.createElement("h1", {}, "Hello from React!!");
        // console.log(heading);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(heading);

        /* wrong way
        const heading2 = React.createElement("h2", {}, "This is first program using react");
        const root2 = ReactDOM.createRoot(document.getElementById("root2"));
        root2.render(heading2);
        */

        // const App = React.createElement("div", {}, [
        //   React.createElement("h1", {id: "heading"}, "Hello from React!!"),
        //   React.createElement("h2", {}, "This is first program using react")
        // ]);
        // const root = ReactDOM.createRoot(document.getElementById("root"));
        // root.render(App);

        /* how to create 
        <div>
            <div>
            <h1>Hello from React Again!!</h1>
            </div>
        </div>
         */

        const parent = React.createElement("div", {id: "parent"}, 
            [
                React.createElement("div", {id:"child"},React.createElement("h1", {id:"child2"}, "I am child2")),
                React.createElement("div", {id:"child3"},React.createElement("h1", {id:"child4"}, "I am child4"))
                
            ]
        )
        const root  = ReactDOM.createRoot(document.getElementById("root"));
        root.render(parent);
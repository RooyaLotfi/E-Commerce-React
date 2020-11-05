//importing objects in react module:
import React from 'react';
// React Dom is object and we are getting it from react-dom module 
import ReactDOM from 'react-dom';

//defining a new element: we set the element to a jsx expression 
const element = <h1>Hello World! </h1>;
const element2 = <h2>what's up?</h2>
// babel will compile this down to a call to React.createElement() this is the reason why we need to make a call
// to React element in react module. Even though we are not using this object directly 

console.log(element);
// hot module reloading: when you save changes the browser applies the changes 

//In the following lines we want to render element in to real dom which is why we imported reactdom
// first element: the elemet we want to render second element: where in the real dom we want to render it
// we get reference to dom element which is the root so we use document.getElementbyId()
ReactDOM.render(element, document.getElementById('root'));
// <div id = "root"></div> is the container of react application 
// so react dom will get reference to document.getElementById('root') and render this react element inside it

ReactDOM.render(element2, document.getElementById('root2'));
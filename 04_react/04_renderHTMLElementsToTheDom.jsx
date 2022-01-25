//so far, you've learned that jsx is a convenient tool to wirte readable html within js
//with react, we can render this jsx directly to the html dom using react's rendering api knwon as reactdom
//reactdom offers a simple method to render react elements to the dom which looks like this:
//"ReactDOM.render(componentToRender, targetNode)",
//where the first argument is the React element or componen that you want to render, and the second argument is the DOM node that you want to render the componnent to
//as you would expect, ReactDOM.render() must be called after the jsx element declarations, just like how you must declare variables before using them
//
//the code editor has a simple jsx component
//use the "ReacDOM.render()" method to render this component to the page
//you can pass defined JSX elements directly in as the first argument and use "document.getElementById()" to select the DOM node to render them to
//there is a div with "id='challenge-node'" available for you to use
//make sure you don't change the JSX constant
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  // Change code below this line
  ReactDOM.render(JSX, document.getElementById('challenge-node'))
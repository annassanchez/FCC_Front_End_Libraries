//now that you've learned the basics of JSX and React components, it's time to write a component on your own
//react components are the core buildings blocks of React applications so it's important to become very familiar with writing them
//remember, a typical React component is an ES6 "class" which extends "React.Component"
//it has a render method that returns HTML (from JSX) or "null"
//this is the basic form of a react component
//once you understand this well, you will be prepared to start building more complex React projects
//
//define a class "MyComponent" that extends "React.Component"
//its render method should return a "div" that contains an "h1" tag with the text: "My First React Component!" in it
//use this text exactly, the case and punctuation matter
//make sure to call the constructor for your component, too
//render this component to the DOM using "ReactDOM.render()"
//there is a "div" with "id='challenge-node'" available for you to use
// Change code below this line
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>My First React Component!</h1>
        </div>
      );
    }
  };
  
  ReactDOM.render(<MyComponent />, document.getElementById('challenge-node'))
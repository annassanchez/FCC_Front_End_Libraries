//the other way to define a react component is with the ES6 "class" syntax
//in the following example, "Kitten" extends "React.Component":
/* class Kitten extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>Hi</h1>
    );
  }
} */
//this creates an es6 class kitten which extends the React.Component class
//so the "Kitten" class now has access to many useful React features, such as local state and lifecycle hooks
//don't woeey if you aren't familiar with these terms yet, they will be covered in greater detail in later challenges
//also notice the "Kitten" class has a "constructor" defined within it that calls "super()"
//it uses "super()" to call the constructor of the parenc class, in the case "React.Component"
//the constructor is a special method used during the initialization of objects used during the initialization of objects that are created with the "class" keyword
//it is best practice to call a component's "constructor" with "super", and pass "props" to both
//this makes sure the component initialized porperly
//for now, know that it is standard for this code to be included
//soon you will see other uses got the constructor as well as "props"
//
//MyComponent is defined in the code editor using class syntax
//finish writing the "render" method so it returns a "div" element that contains an "h1" with the text "Hello React!"
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      // Change code below this line
      return (
        <div>
          <h1>Hello React!</h1>
        </div>
      );
      // Change code above this line
    }
  };
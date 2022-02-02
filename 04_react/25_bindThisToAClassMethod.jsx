//in addition to setting and updating 'state', you can also define methods for our component class
//a class method typycally needs to use the 'this' keyword so it can access properties on the class (such as 'state' and 'props') inside the scope of the method
//there are a few ways to allow your class methods to access 'this'
//one common way is to explicitly bid 'this'  in the constructor so 'this' becomes bound to the class methods when the component is initialized
//you may have noticed the last challenge used /* this.handleClick = this.handleClick.bind(this) */ for its 'handleClick' method in the constructor
//then, when you call a function like 'this.setState()' within your class method, 'this'  refers to the class and will not be 'undefined'
//note: the 'this' keyword is one of the most confusing aspects of js but it plays an important role in react
//althouugh its behavior here is totally normal, these lessons aren't the place for an in-depth review of 'this' so please refer to other lessons if the above is confusing!
//
//the code editor has a component with a 'state' that keeps track of the text
//it also has a method which allows you to set the test to 'you clicked!'
//however, the method doesn't work because it's using the 'this' keyword that is undefined
//fix it by explicitly binding 'this' to the 'handleClick()' method in the component's constructor
//next add a click handler to the 'button'  element in the render method
//it should trigger the 'handleClick()' method when the button receives a clcik event
//remember that the method you pass to the 'onClick' handler needs curly braces because it should be interpreted directly as js
//once you complete the above steps you click the button and see 'you clicked!'
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      // Change code below this line
      this.handleClick = this.handleClick.bind(this);
      // Change code above this line
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <button onClick = {this.handleClick}>Click Me</button>
          { /* Change code above this line */ }
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
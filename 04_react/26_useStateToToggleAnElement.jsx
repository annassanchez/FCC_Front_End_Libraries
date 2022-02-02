//sometimes you might need to know the previous state when updating the state
//however state updates may be asynchronours -- this means react may batch multiple 'setState()' calls into a single update
//this means you can't rely on the previous value ot 'this.state' or 'this.props' when calculating the next value
//so you should not use not use code like this:
/* this.setState(
	{ counter: this.state.counter + this.props.increment }
); */
//instead, you should pass 'setState' a function that allows you to access state and drops
//using a function with 'setState' guarantees you are working with the most current values of state and props
//this means that the above should be rewritten as:
/* this.setState(
	{ counter: this.state.counter + this.props.increment }
); */
//you can also use a form without 'props' if you need only the 'state':
/* this.setState(state => ({
	counter: state.counter + 1
})); */
//note that you have to wrap the object literal in parentheses, otherwise js thinks it's a block of code
//
//'MyComponent' has a 'visibility' property which is initialized to 'false'
//the render method returns one view if the value of 'visibility' is true, and a different view it it is false
//currently, there is no way of updating the 'visibility' property in the component's 'state' 
//the value should toggle back and forth between true and false
//there is a click handler on the button which triggers a class method called 'toggleVisibility()'
//pass a function to 'setState' to define this method so tath teh 'state' of 'visibility' toggles to the opposite value when the method is called
//if 'visibility' is 'false', the method sets it to 'true', and vice versa
//finally, click the button to see the conditional rendering of the component based on its 'state'
//hint: don't forget bid the 'this' keyword to the method in the 'constructor'! 
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    // Change code below this line
    this.toggleVisibility = this.toggleVisibility.bind(this);
    // Change code above this line
  }
  // Change code below this line
  toggleVisibility() {
    this.setState(state => {
      if (state.visibility === true) { 
        return { visibility: false }
       } else { 
        return { visibility: true }
       }
    });
  }
  // Change code above this line
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>Click Me</button>
        </div>
      );
    }
  }
}
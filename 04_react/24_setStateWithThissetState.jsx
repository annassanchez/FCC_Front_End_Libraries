//the previous challenges covered component 'state'  and how to initalize state in the 'constructor'
//ther is also a way to change the component's 'state' 
//react provides a method for updating component 'state' called 'setState'
//you call the 'setState' method within your component class like so: 'this.setState()', passing in an object with key-value pairs
//the keys are your state properties and the vaues are the updated state data
//for instance, if we were storing a 'username' in state and wanted to update it, it would look like this:
/* this.setState({
  username: 'Lewis'
}); */
//react expects you to never modify 'state' directly, instead always use 'this.setSate()' when state changes occur
//also, you should note that React may batch multiple state updates in order to impove performance
//what this means is that state updates through the 'setState' method can be asynchronous
//there is an alternative syntax for the 'setState' method which provides a way around this problem
//this is rarely needed but it's good to keep it in mind!
//please consult the React docs for further details
//
//there is a 'button'  element in the code editor which has an 'onClick()' handler
//this handler is triggered when the 'button' receives a click event in the browser, and runs the 'handleClick' method defined on 'MyComponent'
//within the 'handlerClick' method, update the component 'state' using 'this.setState()'
//set the 'name' property in 'state' to equal the string 'React Rocks!'
//click the button and watch the rendered state update
//don't worry if you don't fully understand how the click handler code works at this point
//it's covered in upcoming challenges
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      // Change code below this line
      this.state = {
        name: 'React Rocks!'
      };
      // Change code above this line
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
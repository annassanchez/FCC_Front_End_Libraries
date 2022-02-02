//your application may have more complex interactions between state and the rendered ui
//for example, form control elements for text input, such as 'input' and 'textarea', maintain their own state in the dom as the suer types
//with react, you can move this mutable state into a react a component's 'state'
//the user's input becomes part of the application 'state', so react controls the value of that input field
//typically, if you have react components with input fields the user can type into,  it will be a controlled input form
//
//the code editor has the skeleton of a component called 'ControlledInput' to create a controlled 'input' element
//the component's 'state' is already initialized with an 'input'  property that holds an empty string
//this value represents the text a suer types into the 'input' field
//first, create a method called 'handleChange()' that has a parameter called 'event'
//when the method is called, it receives an 'event' object that contains a string of text from the 'input' element
//you can access this string with 'event.target.value' inside the method
//update the 'input'  property of the component's 'state' with this new string
//in the 'render' method, create the 'input' element above the 'h4' tag
//add a 'value' attribute which is equal to the 'input' property of the component's 'state'
//then add an 'onChange()' event handler set to the 'handleChange()' method
//when you type in the input box, that text is processed by the 'hanfleChange()' method, set as the 'input' property in the local 'state', and rendered as the value in the 'input' boz on the page
//the component 'state' is the single source of truth regarding the input data
//last but not least, don't forget to add the necessary bindings in the constructor
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      // Change code below this line
      this.handleChange = this.handleChange.bind(this);
      // Change code above this line
    }
    // Change code below this line
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    };
    // Change code above this line
    render() {
      return (
        <div>
          { /* Change code below this line */}
          <input value = {this.state.input} onChange = {this.handleChange}/>
          { /* Change code above this line */}
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };
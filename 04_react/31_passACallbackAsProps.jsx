//you can pass 'state' as props to child components, but you're not limited to passing data
//you can also pass handler functions or any method that's defined on a react component to a child component
//this is how you allow child components to interact with their parent components
//you pass methods to a child just like a regular prop
//it's assigned a name and you have access to that method name under 'this.props' in the child component
//
//there are three components outlined in the code editor
//the 'MyApp' component is the parent that will render the 'GetInput'  and 'RenderInput' child components
//add the 'GetInput'  component to the render method in 'MyApp', then pass it a prop called 'input' assigned to 'inputValur' from 'MyApp's 'state'
//also creates a prop called 'handleChange' and pass the input handler 'handleChange' to it
//next, add 'RenderInput' to the render method in 'MyApp', then create a prop called 'input' and pass the 'inputValue' from 'state' to it
//once you are finished you will be able to type in the 'input' field in th 'GetInput' component, which then calls the handler method in its parents via props
//this updates the input in the 'stae' of the parent, which is passes as porps to both children
//observe how the data flows between the components and how the single source of truth remains the 'state' of the parent component
//admittedly, this example is a bit contrived, but should serve to illustrate how data and callbacks can be passed between react components
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* Change code below this line */ }
          <GetInput input = {this.inputValue}
           handleChange = {this.handleChange}/>
          <RenderInput input = {this.state.inputValue}/>
          { /* Change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
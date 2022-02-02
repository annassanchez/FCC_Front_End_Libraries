//the last challenge showed that react can control the internal state for certain elements like 'input' and 'textarea', which makes controlled componets
//this applies to other form elements as well, including the regular html 'form' element
//
//the 'MyForm'  component is set up with an empty 'form'  with a submit handler
//the submit will be called when the form is submitted
//we've added a button which submits the form
//you can see it has the 'type' set to 'submit'  indicating it is the button controlling the form
//add the 'input' element in the 'form'  and set its 'value' and 'onChange()' attributes the 'handleSubmit' method so that it sets the component state property 'submit'  to the current input value in the local 'state'
//note: you also must call 'event.preventDefault()' in the submit handler, to prevent the default form submit behavior which will refresh the web page
//for camper conveninece, the default behaviour has been disabled here to prevent refreshes from resetting challenge code
//finally, create an 'h1' tag after the 'form' which renders the 'submit' value from the component's 'state'
//you can then type in the form and click the button (or press enter), and you should see your input rendered to the page
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      // Change code below this line
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
      // Change code above this line
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            {/* Change code below this line */}
            <input 
              value={this.state.input}
              onChange={this.handleChange} />
            {/* Change code above this line */}
            <button type='submit'>Submit!</button>
          </form>
          {/* Change code below this line */}
          <h1>{this.state.submit}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }
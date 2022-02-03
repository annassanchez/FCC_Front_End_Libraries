//the 'componentDidMount()' method is also best place to attache any event listeners you nedd to add for specific functionality
//react provides a synthetic event system which wraps the native event sustem presents in browsers
//this means that the synthetic event system behaves exactly the same regardless of the user's browser -- even if the native events may have differently between different browser
//you've already been using some of these synthetic event handlers such as 'onClick()'
//react synthetic event system is great to use for most interactions you'll manage on dom elements
//however, if you want to attach an event handler to the document or window objects, you have to do this directly
//
//attach an event listener in the 'componentDiMount()' method for 'keydown' events have these events trigger the callback 'handleKeyPress()'
//you can use 'document.addEventListener()' which takes the event (in quotes) as the first and the callback as the second argument
//then, in the 'componentWillUnmount()', remove this same event listenenr
//you can pass the same arguments to 'document.removeEventListener()'
//it's good to practice to usethis lifecycle method to do any clean up on react components before they are unmounted and destroyed
//removing event listener is an example of one such clean up action 
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        message: ''
      };
      this.handleEnter = this.handleEnter.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    // Change code below this line
    componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress)
    }
    componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress)
    }
    // Change code above this line
    handleEnter() {
      this.setState((state) => ({
        message: state.message + 'You pressed the enter key! '
      }));
    }
    handleKeyPress(event) {
      if (event.keyCode === 13) {
        this.handleEnter();
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.message}</h1>
        </div>
      );
    }
  };
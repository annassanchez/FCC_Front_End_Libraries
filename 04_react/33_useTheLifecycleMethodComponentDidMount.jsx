//most web developers, at some point, need to call an API endpoint to retrieve data
//if you're working with react, it's important to know where to perform this action
//the best practice with react is to place api calls or any calls to server in the lifecycle method 'componentDidMount()'
//this method is called after a component is mounted to the dom
//any calls to 'setState()' here will trigger an update once you receive the data
//
//there is a mock api call in 'componentDidMount()'
//it sets state after 2.5 seconds to simulate calling a server to retireve data
//this example requests the current total active users for site
//in the render method, render the value of 'activeUsers' in the 'h1'  after the text 'Active Users:'
//watch what happens in the peview, and fell free to change te timeout to see the different effects
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
    render() {
      return (
        <div>
          {/* Change code below this line */}
          <h1>Active Users: {this.state.activeUsers}</h1>
          {/* Change code above this line */}
        </div>
      );
    }
  }
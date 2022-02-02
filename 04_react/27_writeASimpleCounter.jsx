//you can design a more complex stateful component by combining the concepts covered so far
//these include initializing 'state', writing methods that set 'state', and assigning click handlers to trigger these methods
//
//the 'Counter' component keeps track of a 'count' value in 'state'
//there are two buttons which are two buttons which call method 'increment()' and 'decrement()'
//write these methods so the counter value is incremented or decremented by 1 when the appropriate button is clicked
//also create a 'reset()' method so when the reset button is clicked, the count is set to 0
//note: make sure you don't modify the 'className's of the buttons
//also, remember to add the necessary bindings for the newly-created methods in the constructor
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
      // Change code below this line
      this.increment = this.increment.bind(this);
      this.decrement = this.decrement.bind(this);
      this.reset = this.reset.bind(this);
      // Change code above this line
    }
    // Change code below this line
    reset() {
      this.setState({
        count: 0
      });
    };
    increment() {
      this.setState((state) => ({
        count: state.count + 1
      }));
    };
    decrement() {    
      this.setState((state) => ({
        count: state.count - 1
      }));
    };
    // Change code above this line
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };
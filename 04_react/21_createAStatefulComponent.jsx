//one of the most important topics in react is 'state'
//state consists of any data your application needs to know about, that can change over time
//you want your apps to respond to state changes and present an updated UI when necessary
//react offers a nice solution for the state management of modern web applications
//you create state in a react component by declaring a 'state' property of the component class in its 'constructor'
//this initializes the component with 'state' when it is created
// the 'state' property must be set to a js 'object
//declaring it looks like this:
/* this.state = {

} */
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      // Only change code below this line
      this.state = {
        name: 'hola'
      }
      // Only change code above this line
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
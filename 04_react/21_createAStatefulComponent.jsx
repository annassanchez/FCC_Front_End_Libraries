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
//you have access to the 'state' object throughout the life od your component
//you can update it, render it in your ui, and pass it as props to child components
//the 'state' object can be as complex or as simple as you need it to be
//note that you must create a class component by extending 'React.Component' in order to create 'state' like this
//
//there is a component in the code editor that is trying to render a 'name' property from its 'state'
//however, there is no 'state' defined
//initialize the component with 'state' in the 'constructor' and assign your name to a property of 'name' 
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
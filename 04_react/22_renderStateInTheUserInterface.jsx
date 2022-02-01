//once you define a component's initial state, you can display any part of it in the UI that is rendered
//if a component is stateful, it will always have access to the data in 'state' in its 'render()' method
//you can access the data with 'this.state'
//if you want to access a state value within the 'return'  of the render method, you have to enclose the value in curly braces
//'state' is one of the most powerful features oif components in react
//it allows you to track important data in your app and render a ui in response to changes in this data
//if your data changes, your ui will change
//react uses what is called a virtual dom, to keep track of changes behind the scenes
//when state data updates, it triggers a re-render of the components using that data -- including child components that received the data as a prop
//react updates the actual dom, but only where necessary
//this means you don't have to worry about changing the dom
//you simply declare what the ui should look like
//note that if you make a component stateful, no other components are aware of its 'state'
//its 'state' is completely encapsulated, or local to that component, unless you pass state data to a child component as 'props'
//this notion of encapsulated 'state' is very important because it allows you to write certain logic, then have that logic contained and isolated in one place in your code
//
//in the code editor, 'MyComponent' is already stateful
//define a 'h1' tag in the componet's render method which renders the value of 'name' from the component's state
//note: the 'h1' should only render the value from 'state' and nothing else
//in jsx, any code you write with curly braces '{ }' will be treated as js
//so to access the value from 'state'  just enclose the reference in curly braces
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{this.state.name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
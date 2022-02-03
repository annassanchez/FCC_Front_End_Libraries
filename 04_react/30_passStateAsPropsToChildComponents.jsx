//you saw a lot of example that passed props to child jsx elements and child react components in previous challenges
//you may be wondering where these props come from
//a common pattern is to have a stateful component containing the 'state' important to your app, that then renders child components
//you want these components to have access to some pieces of that 'state', which are passed as props
//for example, maybe you have an 'App' component that renders a 'Navbar', among otehr components
//in you 'App', yu have 'state' that contains a lot of user information, but the `Navbar` only needs access to the user's username so it can display it
//you pass that piece of 'state' to the 'Navbar' component as prop
//this pattern illustrate some important paradigsm in react
//the first is unidirectional data flow
//state flows in one direction down the tree of your application's components, from the stateful parent component to child components
//the child components only receives the state data they need
//the second is tat complex stateful apps can be crooken down into just a few, or maybe a single, stateful component
//the rest of your components simply receive state from the parent as props, and render a ui from that state
//it begins to create a separation where state management is handled in one part of code and ui rendering in another
//the principle of separating state logic from ui logic is one of react's key principles
//when it0s used correctly, it makes the design of complex, stateful applications much easier to manage
//
//the 'MyApp'  componets is stateful and rendrs a 'Navbar' component as child
//pas the 'name' property in its 'state' down to the child component, then show the 'name' in the 'h1' tag that's part of the 'navbar' render method
//'name' should appear after the text 'Hello, my name is:'
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'CamperBot'
      }
    }
    render() {
      return (
         <div>
           {/* Change code below this line */}
           <Navbar name = {this.state.name}/>
           {/* Change code above this line */}
         </div>
      );
    }
  };
  
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
      <div>
        {/* Change code below this line */}
        <h1>Hello, my name is: {this.props.name}</h1>
        {/* Change code above this line */}
      </div>
      );
    }
  };
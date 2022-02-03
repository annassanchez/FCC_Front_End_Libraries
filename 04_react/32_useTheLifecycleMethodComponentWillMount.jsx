//react components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component
//these are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time
//this can be before they are rendered, before they update, before they receive props, before theu unmount, and so on
//here is a list of some of the main lifecycle methods: 
/* componentWillMount() componentDidMount() shouldComponentUpdate() componentDidUpdate() componentWillUnmount() */
//the nest several lessons will cover some of the basic use cases for these lifecycle methods
//note: the componentWillMount lifecycle method will be deprecated in a feature of 16.X and removen in version 17
//
//the 'componentWillMount()' method is called the 'render()' method when a component is being mounted to the dom
//log something to the console within 'componentWillMount()' -- you may want to have your browser console open to see the output
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
      // Change code below this line
      <div>console.log(props)</div>
      // Change code above this line
    }
    render() {
      return <div />
    }
  };
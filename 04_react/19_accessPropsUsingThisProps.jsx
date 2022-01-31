//the last several challenges covered the basic ways to pass props to child components
//but what if the child component that you're passing a prop to is an es6 class component, rather than a stateless functional component?
//the es6 class component uses a slightly diferent convention to access props
//anytime you refer to a class component within itself, you use the 'this' keyword
//to access props within a class component, you preface the code that you use to access it with 'this'
//for example if an es6 class component has a prop called 'data', you wirte '{this.props.data}' in jsx
//
//render an instance of the 'Welcome' compoennt in the parent component 'App'
//here, give 'Welcome' a prop of 'name' and assign it a value of a string
//within the child, 'Welcome', access the 'name'  prop within the 'strong' tags
class App extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
              { /* Change code below this line */ }
              <Welcome name="Pepe"/>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  
  class Welcome extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
            { /* Change code below this line */ }
            <p>Hello, <strong>{this.props.name}</strong>!</p>
            { /* Change code above this line */ }
          </div>
      );
    }
  };
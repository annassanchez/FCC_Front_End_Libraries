//the previous challenges covered a lot about creating and composing jsx elements, functional components, and ES6 style class components in react
//with this foundation, it's time to look at another feature very common in react: props
//in react, you can pass props, or properties, to child components
//say you have an "App" component which renders a child component called "Welcome" which is a stateless functional component
//you can pass "Wellcome" a "user" property by writing:
/* <App>
  <Welcome user='Mark' />
</App> */
//you use a custom HTML attributes created by you and supported by react to be passed to the component
//in this case, the created property "user" is passed to the component "Welcome"
//sice "Welcome" is a stateless functional component, it has acces to this value like so:
/* const Welcome = (props) => <h1>Hello, {props.user}!</h1> */
//it is a standard to call this value "props" and when dealing with stateless functional components, you basically consider it as an argument to a function which returns jsx
//you can access the value of the argument in the function body
//with class components, you will see this is a little different
//
//there are "Calendar" and "CurrentDate" components in the code editor
//when rendering "CurrentDate" from the "Calendar" component, pass in a propety of "date" assigned to the current date from js's "Date" object
//then access this "prop" in the "CurrentDate" component, showing its values to be evaluated as js, they must be enclosed in curly brackets, for instance "date={Date()}"
const CurrentDate = (props) => {
    return (
      <div>
        { /* Change code below this line */ }
        <p>The current date is: {props.date}</p>
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          { /* Change code below this line */ }
          <CurrentDate date={Date()}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
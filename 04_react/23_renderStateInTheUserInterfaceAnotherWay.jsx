//there is another way to access 'state' in a component
//in the 'render()' method, before the 'return' statement, you can write JavaScript directly
//for example, you could declare functions, access data from 'state' or 'props', perform computations on this data, and so on
//then, you can assign any data to varaibles, which you have access to in the 'return' statement
//
//in the 'MyComponent' render method, define a 'const' called 'name' and set it equal to the name value in the component's 'state'
//because you can wirte js directly in this part of the code, you don't have to enclose this reference in curly braces
//next, in the return statement, render this value in an 'h1'  tag using the variable 'name'
//remember, you need to use the jsx syntax (curly braces for js) in the return statement
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      // Change code below this line
      const name = this.state.name; 
      // Change code above this line
      return (
        <div>
          { /* Change code below this line */ }
          <h1>{name}</h1>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
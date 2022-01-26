//the last challenge showed a sumple way to compose two components, but there are many different ways you can compose components with react
//component composition in obe of react's powrful features
//when you work with react, it is important to start thinking about your user interface in terms of components like the app example in the last challenge
//you break down your UI into its basic buiding blocks, and those pieces become the components
//this helps to separate the code responsible for handling your application logic
//it can gereately simplify the development and maintenance of complex projects
//
//there are two functional components defined in the code editor, called "TypesOfFruit" and "Fruits"
//take the "TypesOfFruit" component and compose it, or nest it, within the "Fruits" component
//the take the "Fruits" component and nest it within the "TypesOfFood" component, which is nested within a parent component of its own!
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  
  const Fruits = () => {
    return (
      <div>
        { /* Change code below this line */ }
        <TypesOfFruit />
        { /* Change code above this line */ }
      </div>
    );
  };
  
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
  
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          { /* Change code below this line */ }
          <Fruits />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
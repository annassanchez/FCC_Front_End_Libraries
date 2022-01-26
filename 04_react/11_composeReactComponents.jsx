//as the clallenges continue to use more complex compositions with react components and jsx, there is one important point to note
//rendering es6 style class components within other components i no different than rendering the simple components you used in the last few challenges
//you can render jsx elements, stateless functional components, and es6 class components within other components
//
//in the code editor, the "TypesOfFood" component is already rendering a component called "Vegetables"
//also, there is the "Fruits" component from the last challenge
//
//nest two components inside of "Fruits" -- first "NonCitrus", and then "Citrus"
//both of these components are provided for you behind the scenes
//next, nest the "Fruits" class component into the "TypesOfFood" component, below the "h1" heading element and above "Vegetables"
//the result should be a sereies of nested components, which uses tow different component types
class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          { /* Change code below this line */ }
          <NonCitrus />
          <Citrus />
          { /* Change code above this line */ }
        </div>
      );
    }
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
          <Vegetables />
        </div>
      );
    }
  };
//now we will look ar how we can compose multiple react componets together
//imagine you are building an app and have created three components: a Navbar, Dashboard, and Footer
//to compose these components together, you could create an "App" parent component which renders each of these three components as children
//to render a component as a child in React component, you include the component name written as a custom HTML tag in the JSX
//for ecample, in the "render" method you could write:
/* return (
 <App>
  <Navbar />
  <Dashboard />
  <Footer />
 </App>
) */
//when react encounters a custom html tag that references another component (a component name wrapped in "< />" like in this example), it renders the markup for that component in the location of the tag
//this should illustrate the parent/child relationship between the "App" component and the "Navbar", "Dashboard" and "Footer"
//
//in the code editor, there is a simple functional component called "ChildComponent" and class component "ParentComponent"
//compose the two together by rendering the "ChildComponent" within the "ParentComponent"
//make sure to close the "ChildComponent" tag with a forward slash
//Note: "ChildComponent" is defined with an ES6 arrow function beacuse this is a very common practice when using React
//however, know that this is just a function
//if you aren't familiar with the arrow function syntax, please refer to the js section
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          { /* Change code below this line */ }
          <ChildComponent />
          { /* Change code above this line */ }
        </div>
      );
    }
  };
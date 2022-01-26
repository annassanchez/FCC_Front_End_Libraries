//you may remember using the reatcDOM API in an earlier challenge to render de jsx elements to the DOM
//the process for rendering react components will look very similar
//the past few challenges focused on components and composition, so the rendering was done for you behind the scenes
//however, none of the react code you write will render to the dom without making a call to the reactDOM API
//here's a refresher to the syntax: "ReactDOM.render(componentToRender, targetNode)"
//the first argument is the react component that you want to render
//the second argument is the dom node that you want to render that component within
//react components are passed into "ReactDOM.render()" a little differently that JSX elements
//for JSX elements, you pass in the name of the element that you want to render
//however, for react components, you need to use the same syntax as if you were rendering a nested component, for example:
//"ReactDOM.render(<ComponentToRender />, targetNode)"
//you use this syntac for both ES6 class components and functional components
//
//both "Fruits" and "Vegetables" components are defined for you behind the scenes
//render both components as children of the "TypesOfFood" component, then render "TypesOfFood" to the DOM
//there is a "div" with "id='challenge-node" available for you to use
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          {/* Change code below this line */}
          <Fruits />
          <Vegetables />
          {/* Change code above this line */}
        </div>
      );
    }
  };
  
  // Change code below this line
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
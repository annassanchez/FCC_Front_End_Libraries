//except for the last challenge, you've been passing ptops to stateless functional components
//these components act like pure functions
//they accept props as input and return the same view every time they are passed the same props
//you may be wondering what state is, and the nest challenge will cover it in more detail
//before that , here's a review of the terminology for components
//a stateless functional component is any function you write which accepts props and returns jsx
//a stateless component, on the other hand, is a class that extends 'React.Component', but does not use internal state (covered in the next challeng)
//finally, a stateful component is a class component that does maintain its own internal state
//you may see stateful components referred to simply as components or React components
//a common pattern is to try to minimize statefulness and to create stateless unctional components wherever possible
//this helps contain your state management to a specific area of your application
//in turn, this impoves development and maintenance of yout app by making it easierto follow how changes to state affect its behavior
//
//the code editor has a 'CampSite' component that renders a 'Camper' component as a child
//define the 'Camper' component adn assign it default props of '{ name: 'Camper Bot'}'
//inside the 'Camper' component, render any code that you want, but make sure to have one 'p' element that includes only the 'name' value that is passed in as 'prop' 
//finally, define 'propTypes' on the 'Camper' component to require 'name' to be provided as a prop and verify that it is type 'string'
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  // Change code below this line
  const Camper = props => <p>{props.name}</p>;
  
  Camper.defaultProps = {
    name: "CamperBot"
  };
  
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };
  
  
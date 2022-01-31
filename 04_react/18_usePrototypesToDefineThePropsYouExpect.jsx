//react provides useful type-checking features to verify that components receive props of the correct type
//for example, your application makes an api call to retrieve data that you expect to be in any array, which is then passed to a component as a prop
//you can set 'propTypes' on yur component to require the data to be of type 'array'
//this will throw a useful warning when the data is of any other type
//it's consider a best practice to set 'propTYpes' when you know the type of a prop ahead of time
//you can define a 'propTypes' property for a component in the same way you defined 'defaultProps¡
//doing this will check that props of a given key are present with a given type
//here's an example to require the type 'function' for a prop called 'handleClick':
/* MyComponent.propTypes = { handleClick: PropTypes.func.isRequired } */
//in the example above, the PropTypes.func part checks that 'handleClick' is a function
//adding 'isRequired' tells react that 'handleClick' is a required property for that component
//you will see a warning if that prop isn't provided
//also notice that 'func' represents 'function'
//among the seven js primitive types, 'function' and 'boolean' (written as 'bool') are teh only two that use unusual speling
//in addition to the primitive types, there are other types available
//for example, you can check that a prop is a react element
//please refer to the documentation for all of the options
//note: as of react v.15.5.0. 'PropTypes' is imported from React, like this:
/* imprt PropTypes from 'prop-types'; */
//
//define 'propTypes' for the 'Items' component to require 'quantity' as a prop and verify that it is of type 'number' 
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  
  // Change code below this line
    Items.propTypes = {
    quantity: PropTypes.number.isRequired
  }; 
  // Change code above this line
  
  Items.defaultProps = {
    quantity: 0
  };
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };
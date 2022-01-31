//the ability to set default props is a useful feature in react
//the way to override the default props is to explicitly set the prop tor a component
//
//the 'ShopphingCart' component now renders a child component 'Items'
//this 'Items' component has a default propt 'quantity' set to the integer 0
//override prop by passing in a value of 10 for 'quantity'
//note: remember that the syntax to add a prop to a component looks similar to how you add html attributes
//however, since the value for 'quantity' is an integer, it won't go in quotes but it should be wrapped in curly braces
//for example '{100}'
//this syntax tells jsx to interpret the value within the braces directly as js
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  
  Items.defaultProps = {
    quantity: 0
  }
  
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      { /* Change code below this line */ }
      return <Items quantity={10}/>
      { /* Change code above this line */ }
    }
  };
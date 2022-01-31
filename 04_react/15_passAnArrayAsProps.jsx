//the last challenge demonstrated how to pass information from a parent component to a child component as props or properties
//this challenge looks ar how arrays can be passed as props
//to pass an array to a jsx element, it must be treated as js and wrapped in curly braces
/* <ParentComponent>
	<ChildComponent colors = {["green", "blue", "red"]} />
</ParentComponent> */
//the child component then chas access to the array property colors
//array methods such as join() can be used when accessing the property
/* const ChildComponent = (props) => <p> {props.colors.join(', ')</p> */// this will join all colors array items into a commpa separated string and produce: /* <p>green, blue, red</p> */
//later will learn about other common methods to render arrays of data in react
//
//there are List and ToDo components in the code editor
//when rendering each List fron the ToDo component, pass in a tasks property assigned to an array of to-do tasks, for example "["walk dog", "workout"]"
//then access this tasks array in the List component, showing its value within separated list
//today's list hould have at least 2 taks and tomorrow's should have at lesast 3 tasks
const List = (props) => {
    { /* Change code below this line */ }
    return <p>{props.tasks.join(", ")}</p>
    { /* Change code above this line */ }
  };
  
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          { /* Change code below this line */ }
          <List tasks ={["walk dog", "workout"]}/>
          <h2>Tomorrow</h2>
          <List tasks ={["walk dog", "workout", "shopping"]}/>
          { /* Change code above this line */ }
        </div>
      );
    }
  };
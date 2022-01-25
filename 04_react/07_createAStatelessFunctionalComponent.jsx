//components are the core of React
//everything in React is a component and here you will learn how to create one
//there are two ways to crate a React component
//the first way is to create a js function
//defining a component in this way creates a stateless functional component
//the concept of state in an application will be covered in later challenges
//for now, think of a stateless component as one that can receive data and render it, but oes not manage or track the chantes to that data
//(we'll cover the second way to create a React component in the next challenge)
//to create a component with a function, you simply write a js function that returns wither jsx or "null"
//one importan thing to note is that React requires your function name to begin with a capital letter
//here's an example of a stateless functional component that assigns an html in jsx:
/* const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
}; */
//after being transpiled, the "<div>" will have a css class of "customClass"
//because a JSX component represents HTML, you could put several components together to create a more complex HTML page
//this is one of the key advantages of the component architecture React provides
//it allows you to compose your UI from many separate isolated components
//this makes it easier to build and maintain complex user interfaces
//
//the code editor has a function called "MyComponent"
//complete this function so it returns a single "div" element which contains some string of text
//note: the text is considered a child of the "div" element, so you will not be able to use a self-closing tag
const MyComponent = function() {
    // Change code below this line
    return (
      <div>some text</div>
      );
    // Change code above this line
  }
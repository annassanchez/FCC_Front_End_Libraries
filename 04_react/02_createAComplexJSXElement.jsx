//the last challenge was a simple ecample of JSX, but JSX can represent more complex html as well
//one important whing to know about nested jsx is that it must return a single element
//for instance, several jsx elements written as siblings with no parent wrapper element will not transpile
//here's an example
//valid jsx
/* <div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div> */
//invalid jsx
/* <p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p> */
//
//define a new constant jsx that renders a div which contains the following elements in order
//an h1, a p, ans an unordered lsit that contains three li items
//you can include any text within each element
//note: when rendering multiple elements like this, you can wrap them all in parentheses, but it's not strictly required
//also notice this challenge uses a div tag to wrap all the child elements within a single parent element 
//if you remove the div, the jsx will no longer transpile
//keep this mind, since it will also apply when you return jsx elements in react components
const JSX = (<div>
  <h1>hola</h1>
  <p>que tal?</p>
  <ul><li>1</li>
  <li>2</li>
  <li>3</li></ul>
</div>)
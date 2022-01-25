//so far, you've seen how jsx differs from html in a key way with the use of "className" vs. "class" for defining HTML classes
//another important way in which JSX differs from HTML is in the idea of the self-closing tag
//in HTML, almost all tags have both an opening or closing tag: "<div></div>"; the closing tag always has a forward slash before the tag name that your are closing
//however, there are special instances in HTML called "self-closing tags", or tags that don't require both an opening and closing tag before another tag can start
//for example the line-break tag can be written as "<br>" or "<br />", but should never be written as "<br></br>", since it doesn't contain any content
//in jsx, the rules are a little different
//any jsx element can be written with a self-closing tag, and every element must be closed
//the line-break tag, for example, must always be written as "<br />" in order to be valid jsx that can be transpiled
//a "<div>", on the other hand, can be written as "<div />" or "<div></div>"
//the difference is that in the first syntax version there is no way to include anything in the "<div />"
//you will see in later challenges taht this syntax is useful when rendering React components
//
//fix the errors in the code editor so that ir is valid jsx and succesfully transpiles
//make sure you don't change any of the content -- you only need to close tags where the are needed
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />
    </div>
  );
//now that you're getting comfortable writing JSX, you may be wondering how it differs from HTML
//so far, it may seem that html and JSX are exactly the same
//one key difference in jsx that you can no longer use the word class to define html classses
//this is because "class" is a reserved word in js
//instead, jsx uses "className"
//in fact, the naming convention for all html attributes and event references in jsx become camelCase
//for example, a click even in jsx is "onClick", instead of "onclick"
//like wise, "onchanges" becomes "onChange"
//while this is a subtle difference, it is an important one to keep in mind moving forward
//
//apply a class of myDiv to the div provided in the JSX code
const JSX = (
    <div className="myDiv">
      <h1>Add a class to this div</h1>
    </div>
  );
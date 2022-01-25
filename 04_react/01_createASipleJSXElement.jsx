//react is an open source view library created and maintained by fb
//it's a great tool to render the us of modern web applications
//react uses a syntax extension of js called jsx that allows you to write html directly within js
//this has several benefits
//it lets you use the full prgramatic power of js within html, and helps to eep your code readable
//for the most part, jsx is similar to the html that you have already learned, however there are a few key differences that will be covered through the challenges
//for instance, because jsx is a syntactic extension of js, you can actually write js directly within jsx
//to do this, you simply include the code you want to be treated as js within curly braces: "{ 'this is treated as js code' }"
//keep this in mind, since it's used in several future challenges
//however, because jsx is not valid js, jsx code must be compiled into js
//the transpiler babel is a popular tool for this process
//for your convenience, it's already added behind the scenes for this challenges
//if you happen to write syntactically valid jsx, you will see the first test in these challenges fail
//it's worth noting that under the hood the challenges are calling "ReactDOM.render(JSX, document.getElementById('root'))"
//this function call is what places your jsx into react's own lightweight representation of the dom
//react then uses snapshots of its own DOM to optimize updating only specific parts of the actual dom
//
//the current code uses jsx to assign a div element to the constant jsx
//replace the div with an h1 element and add the text 'Hello JSX!' inside it
const JSX = <h1>Hello JSX!</h1>;
ReactDOM.render(JSX, document.getElementById('root'))
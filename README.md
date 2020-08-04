#  Scripts

In the project directory, you can run:

### `npm start`

Starts a development server

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.

#   Notes

##  Lecture 1: React Components

- React is shipped with a component i.e. App.js as an example and is a pretty great example of a stateless functional component.

-All components must return at least one wrapper element.

-There must be one parent wrapper for returning multiple components, e.g.

    return (
        <div>
            <div></div>
            <div></div>
        </div>
    )

-Components are of two kinds:
1. Stateless Components or Functional Components

    function HelloWorld(){
    return (
        <h1>Hello Drake</h1>
    )
}

2. Stateful Components or Class-Based Components

    class HelloWorld extends React.Component{
    render(){
        return (
        <h1>Hello Drake</h1>
        )
    }
}

-To pass a component in another component

    <div>
      <HelloWorld/>
    </div>

-Prop (Properties)
 
 Pass in a prop - 

    <HelloWorld name="Drake"/>

 Access prop -

    function HelloWorld(props){
    return (
        <h1>Hello {props.name}</h1>
    )
}
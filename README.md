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

- All components must return at least one wrapper element.

- There must be one parent wrapper for returning multiple components, e.g.

    return (
        <div>
            <div></div>
            <div></div>
        </div>
    )

- Components are of two kinds:
1. Stateless Components or Functional Components
2. Stateful Components or Class-Based Components

Example 1: Stateless Component

    function HelloWorld(){
        return (
        <h1>Hello Drake</h1>
        )
    }

Example 2: Stateful Component

    class HelloWorld extends React.Component{
        render(){
            return (
            <h1>Hello Drake</h1>
            )
        }
    }

- To pass a component in another component

    <div>
      <HelloWorld/>
    </div>

- Prop (Properties)
 
    - Pass in a prop - 

    <HelloWorld name="Drake"/>

    - Access prop -

    function HelloWorld(props){
        return (
            <h1>Hello {props.name}</h1>
        )
    }

##  Lecture 2: Simple App Plus Minus 

`Features hooks, class based approach`

- Functional approach

    const [var, method_to_modify_var] = useState(initial_value_of_var)

useState(val) function returns a var and a function and that's the reason to declare the LHS const above

    - To modify var we reference method_to_modify_var(new_data)
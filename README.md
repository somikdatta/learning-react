# Notes on my learnings

##  Scripts

In the project directory, you can:

### `yarn start`

Starts a development server

### `yarn test`

Launches the testner in the interactive watch mode.

### `yarn build`

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

        ```
        <HelloWorld name="Drake"/>
        ```

    - Access prop -

        ```
        function HelloWorld(props){
            return (
                <h1>Hello {props.name}</h1>
            )
        }
        ```

##  Lecture 2: Simple App Plus Minus 

`Features hooks, class based approach`

- Functional approach

    const [var, method_to_modify_var] = useState(initial_value_of_var)

useState(val) function returns a var and a function and that's the reason to declare the LHS const above

    - To modify var we reference method_to_modify_var(new_data)

##  Lecture 3: Conventional CSS class styling

- Add styles in CSS file
- Use the class name like so
```
function Header(){
    return (
        <header className="app-header">
            AppName
        </header>
    )
}
```
##  Lecture 4: Add Tailwind CSS

- Remove App.css & all its imports
- `yarn i tailwindcss`
- `yarn tailwindcss init`
- `yarn i postcss-cli && autoprefixer`
- Create postcss.config.js with
```
module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer')
    ]
}
```
- Modify package.json
`"build:css": "postcss src/index.css -o src/tailwind.css",`
`"watch:css": "postcss src/index.css -o src/tailwind.css -w",`
`"start": "yarn build:css && react-scripts start",`
`"build": "yarn build:css && react-scripts build",`

- Restart server with yarn start

##  Lecture 5: Conditional Rendering
`Render HTML conditionally`

- Using state for conditional rendering
```
let menu=null;

    if(showMenu){
        menu = 
        <div>
            The menu
        </div>
    }
```

##  Lecture 6: React Spring (Animations)

- Install react-spring
`yarn add react-spring`
- Define transitions
```
const menuTransitions = useTransition(showMenu,null, {
        from: {opacity: 0, transform: 'translateX(-100%)'},
        enter: {opacity:1, transform: 'translateX(0%)'},
        leave: {opacity: 0, transform: 'translateX(-100%)'}
    })
```
- Use it as follows
```
{
    maskTransitions.map(({item, key, props})=>
        item &&
        <animated.div
            key={key}
            style={props}
            className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
            onClick={()=> setShowMenu(false)}>
        </animated.div>
    )
}
```
##  Lecture 6: React Router

- Install React Router DOM
`yarn add react-router-dom`
- Add necessary imports
```import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
```
- Make sure `Router` encapsulates at the topmost level

- Router can contain `Link` which defines navigation URL

- Router can contain `Switch` which in turn contains `Route` which acts as a router outlet for specified links

## Lecture 7: Axios - HTTP Requests

- Install axios by
`yarn add axios`
- axios works on the mechanisms of promise (then, catch - resolve, reject)
- Implementation
```
axios.method(url).then().catch()
```

## Lecture 8: Hooks

- Hooks let us use state and other React features without using a class i.e. through classless components

- Two introductory hooks

1. useState(value)
```
const [state,stateSetterMethod] = useState(initialValue)
```
`Example: const [count, setCount] = useState(0);`

2. A great substitute for componentDidMount, componentDidUpdate, componentWillUnmount put together
- No clearnup required
- Tell React that component needs to do something after rendering
```
useEffect(() => {
    document.title = `You clicked ${count} times`;
  });
```

- Rules
1. Always call Hooks at the top-level, not within loops, conditionals, nested functions
2. Only call Hooks from React function components or other custom Hooks
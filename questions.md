## 1. What is the difference between Component and PureComponent? give an example where it might break my app.
#### a) Componente has State, and Pure component dosen't, it dosen't have any side-effects, the props you give is the props you output.
## b) Didn't test out a brake scenario.

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is that?
# a) Don't know, I use more Redux and func comp with hooks.

3. Describe 3 ways to pass information from a component to its PARENT.
## a) Through props via function
## b) Using a State managment system like Redux
## c) Via React Context

4. Give 2 ways to prevent components from re-rendering.
## a) wrap component in memo() to prevent re-rendering if the incoming props didn't change
## b) useCallback() to wrap a function because rebuilding the function creates a component re-render too.

5. What is a fragment and why do we need it? Give an example where it might break my app.
## a) Because the jsx elements need to be wrapped in a tag, I usally use <div> but having a lot of div tags makes the app crowded, so I use React.Fragment or <></> tag.
## b) Didn't have a scenario where the app crashed, got one with styles, but I fixed it fast.
  
6. Give 3 examples of the HOC pattern.
## a) You make a component that takes a component as a argument, you add some props you want to inject in that component and you return the component.
## b) A hoc that injects styles
## c) connect from Redux that gives access to state and dispaches of actions

7. what's the difference in handling exceptions in promises, callbacks and async...await.
## a) you can use "try / catch / finaly" with async / await
  
8. How many arguments does setState take and why is it async.
## a) it takes 2 arguments
## b) it's async so you can call as many as you want without any issues

9. List the steps needed to migrate a Class to Function Component.
## 1) change class to function
## 2) remove render method
## 3) replace state & constructor and lyfecycles with react hooks (useEffect, useState, useRef ...)
## 4) no more using "this" and bindings 
## 5) replace all methods with functions

10. List a few ways styles can be used with components.
## a) inline <div styles={{color: 'red'}}></div>
## b) Simple import = import CSS / SASS or other in the Component
## c) Module import = import styles from styles.module.css
## d) CSS as JS object const divStyle = {color: 'blue'};  <div style={divStyle}>Hello World!</div>

11. How to render an HTML string coming from the server.
## a) <div dangerouslySetInnerHTML={{ __html: HTML_STRING_FROM_SERVER }} />

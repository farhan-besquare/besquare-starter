/*
import "./App.css";
import React from "react";
import BoxComponent from "./BoxComponent";
import AnotherComponent from "./AnotherComponent";
import BoxComponentAlternate from "./BoxComponentAlternate";
*/

/*
function App() {
  //counts increase based on click
  const [count, setCount] = React.useState(0);
  const [number, setNumber] = React.useState(0);
  React.useEffect(() => {
    document.title = count;
  });
  //everytime count changes value. it runs. last array is the reference for it to run
  React.useEffect(() => {
    setNumber(count + 1);
  }, [count]);
  const handleClick = () => {
    setCount(count + 1);
  };

  //search bar data key-in display
  const [input, setInput] = React.useState("");
  const input_ref = React.useRef();
  console.log(input_ref);
  //click to use search bar
  const handleClick1 = () => {
    input_ref.current.focus();
  };

  return (
    <>
      <div className="App-header">
        <input
          onChange={(event) => setInput(event.target.value)}
          value={input}
          ref={input_ref}
        />
        <button onClick={handleClick1}>Search Something!</button>
        <div>{input}</div>
        <AnotherComponent array={[1, 2, 3]} />
        <BoxComponent />
        <button onClick={handleClick}>Click Me!</button>
        <div>count: {count}</div>
        <div>number (count + 1): {number}</div>
      </div>
    </>
  );
}

export default App;
*/

/*How to create a working link that opens a different page
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Homepage</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

*/



export default App;

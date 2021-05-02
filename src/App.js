import { useState, useRef } from "react";

const App = () => {
  const [appState, setAppState] = useState([
    { fruitName: "Mango", color: "Orange" },
  ]);

  const updateAppState = (newFruit) => {
    console.log(newFruit);
    setAppState([...appState, { fruitName: newFruit, color: "Purple" }]);
  };

  const appStateDisplay = () => {
    return appState.map((fruit, index) => (
      <li key={index}>{fruit.fruitName}</li>
    ));
  };

  const InputForm = (props) => {
    const fruitName = useRef(null);

    const handleSubmit = (e) => {
      e.preventDefault();
      props.updateAppState(fruitName.current.value);
    };

    return (
      <form onSubmit={handleSubmit}>
        <label>
          Fruit Name:
          <input type="text" ref={fruitName} />
        </label>
        <input type="submit" name="Submit" />
      </form>
    );
  };

  return (
    <div className="container-outer">
      <h1>App</h1>
      <ul>{appStateDisplay()}</ul>
      <InputForm updateAppState={updateAppState} />
    </div>
  );
};

export default App;

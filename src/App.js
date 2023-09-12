import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoList from "./components/TodoList";
import "@fortawesome/react-fontawesome";
function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

export default App;

import React from "react";
import "./style.css";
import TodoList from "./components/TodoList";
function App() {
  // const [todos, setTodos] = React.useState([
  //   { id: 1, text: "Hello, friend" },
  //   { id: 2, text: "goodbye, friend" },
  //   { id: 3, text: "fuck, friend" },
  // ]);
  // const [text, setText] = React.useState("");

  // const handleClick = () => {
  //   let newTodos = [
  //     { id: Math.floor(Math.random() * 1000), text: text },
  //     ...todos,
  //   ];
  //   setTodos(newTodos);
  // };

  return (
    <div className="app">
      {/* <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="add todo..."
      />
      <button onClick={handleClick}>add todo</button>
      <TransitionGroup className="todo-list">
        {todos.map(({ id, text }) => (
         <CSSTransition key={id} timeout={2000} classNames="todos">
           <p onClick={() => setTodos([...todos.filter(todo => todo.id !== id)])}>{id} {text}</p>
         </CSSTransition>
        ))}
      </TransitionGroup> */}
      <TodoList />
    </div>
  );
}

export default App;

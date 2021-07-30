import React, { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [show, setShow] = useState("ALL");
  const [toggleAll, setAll] = useState(true);

  const addTodo = (todo) => {
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const completeTodo = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            id: todo.id,
            text: todo.text,
            complete: !todo.complete,
            date: todo.date,
          };
        } else {
          return {
            ...todo,
          };
        }
      })
    );
  };

  const delTodo = (id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  };

  const editTodo = (id, value) => {
    setTodos((prev) => prev.map((todo) => (todo.id === id ? value : todo)));
  };

  const delAllComplete = () => {
    setTodos(todos.filter((todo) => !todo.complete));
  };


  const changeAll = () => {
    setTodos(todos.map(todo => {
      return {
        id: todo.id,
        text: todo.text,
        complete: toggleAll,
        date: todo.date
      }
    }))
    setAll(!toggleAll)
  }

  var newTodos = [];
  if (show === "COMPLETE") {
    newTodos = todos.filter((todo) => todo.complete);
  } else if (show === "UNCOMPLETE") {
    newTodos = todos.filter((todo) => !todo.complete);
  } else {
    newTodos = todos;
  }

  return (
    <div>
      <TodoForm submitTodo={addTodo} />
      <Todo
        todos={newTodos}
        finishTodo={completeTodo}
        removeTodo={delTodo}
        changeTodo={editTodo}
      />
      All todos: {todos.length}
      Complete: {todos.filter((todo) => todo.complete).length}
      {todos.filter((todo) => todo.complete).length ? (
        <button onClick={delAllComplete}>Delete all complete</button>
      ) : (
        "There is no todos which is not complete"
      )}
      <button onClick={() => setShow("COMPLETE")}>Show all complete</button>
      <button onClick={() => setShow("ALL")}>Show all</button>
      <button onClick={() => setShow("UNCOMPLETE")}>Show all uncomplete</button>
      <button onClick={changeAll}>
        Toggle All: {`${toggleAll}`}
      </button>
    </div>
  );
};

export default TodoList;

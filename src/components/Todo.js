import React from "react";
import CloseBtn from "./btns/CloseBtn";
import EditBtn from "./btns/EditBtn";
import TodoForm from "./TodoForm";
import TickCircle from "./btns/TickCircle";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./animations.css";

const Todo = ({ todos, finishTodo, removeTodo, changeTodo }) => {
  const [edit, setEdit] = React.useState({
    id: null,
    text: "",
  });

  const [isVisible, setVisible] = React.useState(false);

  const editTodo = (value) => {
    changeTodo(edit.id, value);
    setEdit({
      id: null,
      text: "",
    });
  };

  const pushIdandSet = (id) => {
    finishTodo(id);
    setVisible(!isVisible);
  };

  if (edit.id) {
    return <TodoForm edit={edit} submitTodo={editTodo} />;
  }

  return (
    <div>
      <TransitionGroup className="Todo items">
        {todos.map((todo) => {
          const { id, text, complete, date } = todo;
          return (
            <CSSTransition classNames="todo" timeout={500} key={id}>
              <div>
                <div className="tick-element">
                  <TransitionGroup className="tick-thing">
                    {complete ? (
                      <CSSTransition
                        in={isVisible}
                        timeout={700}
                        classNames="tick"
                      >
                        <TickCircle />
                      </CSSTransition>
                    ) : null}
                  </TransitionGroup>
                </div>
                <div className="text-block">
                  <h4
                    onClick={() => pushIdandSet(id)}
                    style={{
                      textDecoration: complete ? "line-through" : "",
                    }}
                  >
                    {text}
                  </h4>
                  <h5>{date}</h5>
                </div>

                <div className="btns-row">
                  <div className="btns-col">
                    <CloseBtn
                      className="func-btn"
                      delTodo={() => removeTodo(id)}
                      style={{
                        cursor: "pointer",
                      }}
                    />
                    <EditBtn
                      className="func-btn"
                      editTodo={() =>
                        setEdit({
                          id: id,
                          text: text,
                        })
                      }
                    />
                  </div>
                  <svg
                    width="12"
                    height="51"
                    viewBox="0 0 8 113"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="8" height="113" rx="4" fill="#E9A631" />
                  </svg>
                </div>
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </div>
  );
};

export default Todo;

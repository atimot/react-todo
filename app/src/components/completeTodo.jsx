import React from "react";

export function CompleteTodo(props) {
  const {todos, clickBack} = props

  return (
    <div className="complete-area">
      <p className="title">完了のTODO</p>
      <ul>
        {todos.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => clickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

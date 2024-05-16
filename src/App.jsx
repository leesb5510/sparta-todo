import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClick = () => {
    const newTodo = {
      title,
      description,
      id: new Date().getTime(),
      isDone: false,
    };
    setTodos([...todos, newTodo]);
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
  };

  const onChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const onDeleteTodo = (id) => {
    const updateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updateTodos);
  };

  const onChangeTodoState = (id) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });

    setTodos(updateTodos);
  };

  return (
    <div className="container">
      <header className="header">
        <strong>My Todo List</strong>
        <p>React</p>
      </header>
      <div className="writeForm">
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" onChange={onChangeTitle} />
          <label htmlFor="description">내용</label>
          <input type="text" id="description" onChange={onChangeDescription} />
        </div>
        <button type="button" onClick={onClick}>
          작성하기
        </button>
      </div>
      <section className="section">
        <h2>Working... 🔥</h2>
        <ul className="todos">
          {todos.map((todo) => {
            if (todo.isDone) {
              return;
            }

            return (
              <li className="todo" key={todo.id}>
                <strong>{todo.title}</strong>
                <p>{todo.description}</p>
                <div className="btn-wrap">
                  <button type="button" onClick={() => onDeleteTodo(todo.id)}>
                    삭제하기
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeTodoState(todo.id)}
                  >
                    완료
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="section">
        <h2>Done... 💬</h2>
        <ul className="todos">
          {todos.map((todo) => {
            if (!todo.isDone) {
              return;
            }

            return (
              <li className="todo" key={todo.id}>
                <strong>{todo.title}</strong>
                <p>{todo.description}</p>
                <div className="btn-wrap">
                  <button type="button" onClick={() => onDeleteTodo(todo.id)}>
                    삭제하기
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeTodoState(todo.id)}
                  >
                    완료
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
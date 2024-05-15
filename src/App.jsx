import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="header">
        <strong>My Todo List</strong>
        <p>React</p>
      </header>
      <div className="writeForm">
        <div>
          <label htmlFor="title">제목</label>
          <input type="text" id="title" />
          <label htmlFor="description">내용</label>
          <input type="text" id="description" />
        </div>
        <button type="button">작성하기</button>
      </div>
      <section className="section">
        <h2>Working... 🔥</h2>
        <ul className="todos">
          <li className="todo">
            <strong>제목입니다</strong>
            <p>설명입니다</p>
            <div className="btn-wrap">
              <button type="button">삭제하기</button>
              <button type="button">완료</button>
            </div>
          </li>
        </ul>
      </section>
      <section className="section">
        <h2>Done... 💬</h2>
        <ul className="todos">
          <li className="todo">
            <strong>제목입니다</strong>
            <p>설명입니다</p>
            <div className="btn-wrap">
              <button type="button">삭제하기</button>
              <button type="button">완료</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
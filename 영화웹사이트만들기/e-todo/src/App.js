import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setTodoList((prevlist) => [todo, ...prevlist]);
    setTodo("");
    console.log(todoList);
  };
  return (
    <div>
      <h1>mytodo</h1>
      <form onSubmit={onSubmit}>
        <input value={todo} type="text" onChange={onChange} />
        <button>+</button>
      </form>
      <p>
        {todoList.map((item, index) => (
          <h1 key={index}>{item}</h1>
        ))}
      </p>
    </div>
  );
}

export default App;

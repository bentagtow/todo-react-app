import Todo from "./components/Todo";

function App() {
  return (
    <div>
      <h1>My To Dos</h1>
      <Todo text="groceries" />
      <Todo text="return amz package" />
      <Todo text="idk man" />
    </div>
  );
}

export default App;

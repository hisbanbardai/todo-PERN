export default function TodoInput() {
  return (
    <>
      <h1 className="main-heading">Input Todo</h1>
      <form className="input-todo-form">
        <input type="text" placeholder="add todo" />
        <button className="btn-add">Add</button>
      </form>
    </>
  );
}

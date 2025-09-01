import "./index.css";

const App = () => {
  const onClickHandler = (event) => {
    console.log("click", event);
  };
  const onChangeHandler = () => {
    console.log("on change", event.target.value);
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log("submit");
      }}
    >
      test
      <input type="text" onChange={onChangeHandler} />
      <button type="submit" onClick={onClickHandler}>
        button
      </button>
    </form>
  );
};

export default App;

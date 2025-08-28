import "./index.css";

const App = () => {
  const name = "Alex";
  const age = 30;
  let attr = "hello";

  if (age === 18) {
    attr = "good";
  } else {
    attr = "bad";
  }

  function test() {
    if (age === 18) {
      return <div>feasdgrgdfd</div>;
    } else {
      return <div>asdasdasd</div>;
    }
  }
  return (
    <div>
      <div>
        {age === 18 ? "good" : "bad"}
        {test()}
      </div>
    </div>
  );
};
export default App;

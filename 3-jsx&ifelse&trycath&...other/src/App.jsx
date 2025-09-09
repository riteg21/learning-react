import "./index.css";

const App = () => {
  const array = [{ hello: "world" }, { hello: "world2" }];

  const arrayReactElements = [];

  // for (let i = 0; i < array.length; i++) {
  //   const obj = array[i];

  //   arrayReactElements.push(<p>{obj.hello}</p>);
  // }

  // const result = array.forEach((obj) => {
  //   arrayReactElements.push(<p>{obj.hello}</p>);
  // });

  // const result = array.map((obj) => {
  //   return <p>{obj.hello}</p>;
  // });

  return (
    <div>
      {array.map((obj) => {
        return <p>{obj.hello}</p>;
      })}
    </div>
  );
};
export default App;
// в массивы можно добавлять jsx элементы

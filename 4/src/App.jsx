import "./index.css";

const USERS = [
  { name: "Alex", id: 1 },
  { name: "John", id: 2 },
  { name: "Bob", id: 3 },
];
const App = () => {
  return (
    <div>
      {USERS.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
        </div>
      ))}
    </div>
  );
};
export default App;
// нужно добавлять key для родительского контейнера обязательно - к данному примеру: id пользователя лучше всего пихать
// реакту это нужно чтобы понять какой компонент он уже рисовал а какой нет - оптимизация х100

import "./index.css";
import UserName from "./UserName.jsx";

let USERS = [
  { id: 1, name: "Alex", surname: "test", age: 20, passportId: 123 },
  { id: 2, name: "Alex", surname: "test2", age: 20, passportId: 66 },
  { id: 3, name: "John", surname: "test3", age: 56, passportId: 123 },
  { id: 4, name: "Bob", surname: "test4", age: 10, passportId: 50 },
];
const App = () => {
  const changeName = (id, newName) => {
    USERS = USERS.map((user) => {
      if (user.id === id) {
        return {
          id: user.id,
          name: user.name,
          surname: user.surname,
          age: user.age,
          passportId: user.passportId,
        };
      }

      return user;
    });
  };
  const data = [];
  USERS.forEach((user) => {
    const key = generateKey(user);

    data.push(
      <div key={key}>
        <UserName
          userName={user.name}
          userSurname={user.surname}
          userAge={user.age}
          changeName={changeName}
        />
      </div>
    );
  });
  return <div>{data}</div>;
};

function generateKey(user) {
  return `${user.name}_${user.surname}_${user.age}_${user.passportId}`;
}
export default App;

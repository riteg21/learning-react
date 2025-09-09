import React, { use, useState, useMemo } from "react";

// useState, userEffect, useCallback, useMemo, useRef, useContext

import "./index.css";

const App = ({ users }) => {
  const convertedUsers = useMemo(() => {
    const result = Object.keys(users).map((usersKey) => {
      console.log(usersKey);
      const user = users[usersKey];
      return {
        id: user.id,
        name: user.name.toUpperCase(),
        age: user.age,
      };
    });
    return result;
  }, [users]); // если users не изменился, то функция не будет вызвана, но если изменился, то вызовется - это называется мемоизация - перекэширование результата функции

  const [isDark, setIsDark] = useState(false);

  const onClickHandler = () => {
    setIsDark((value) => !value);
  };

  return (
    <div className={isDark ? "dark" : "light"}>
      <button onClick={onClickHandler}>Темная тема</button>
      {convertedUsers.map((user) => {
        return (
          <div key={user.id}>
            Name: {user.name}, age: {user.age}
          </div>
        );
      })}
    </div>
  );
};
export default App;

import React, { use, useState } from "react";

import "./index.css";

const App = () => {
  // const [isDark, setIsDark] = useState(true); // функция setIsDark меняет значение isDark

  // хук useState нужен для того, чтобы React отслеживал изменения
  // как это работает?
  // 1. при первом рендере React вызывает функцию компонента (App)
  // 2. useState(true) возвращает массив [true, function]
  //    true - текущее значение состояния
  //    function - функция для изменения состояния
  // 3. React сохраняет это состояние и функцию в своей внутренней структуре данных
  // 4. когда вызывается setIsDark(!isDark), React обновляет значение состояния
  //    и помечает компонент для повторного рендера
  // 5. при следующем рендере React снова вызывает функцию компонента (App)
  // 6. useState теперь возвращает обновленное значение состояния и ту же функцию
  // 7. React сравнивает новый виртуальный DOM с предыдущим и вносит необходимые изменения в реальный DOM

  // если бы мы просто изменили переменную isDark, React не знал бы
  // что нужно перерисовать компонент, и UI не обновился бы

  // const onClickHandler = () => {
  //   // isDark = false;
  //   setIsDark((value) => { //такая запись дает оптимизацию
  //     console.log(value, isDark);
  //     return !isDark;
  //   });
  // };
  // return (
  //   <div className={isDark ? "dark" : "light"}>
  //     <button onClick={onClickHandler}>Переключить тему</button>
  //   </div>
  // );

  const [data, setData] = useState({ name: "", password: "" });
  const onChangeName = (event) => {
    setData((currentData) => {
      return { ...currentData, name: event.target.value };
    });
  };

  const onChangePassword = (event) => {
    setData((currentData) => {
      return { ...currentData, password: event.target.value };
    });
  };

  return (
    <div>
      <input type="text" onChange={onChangeName} />
      <input type="password" onChange={onChangePassword} />

      <p>Ваше имя: {data.name}</p>
      <p>Ваш пароль: {data.password}</p>
    </div>
  );
};
export default App;

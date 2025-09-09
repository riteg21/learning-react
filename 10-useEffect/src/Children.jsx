import React, { use, useEffect, useState } from "react";

const Children = (props) => {
  const [delivery, setDelivery] = useState(false);

  //   useEffect(() => {
  //     //fetch
  //     // startAnimation
  //     console.log("ya otrisovan");

  //     return () => {
  //       console.log("ya unmount"); //функция которая будет вызвана когда компонент будет удален из DOM
  //     };
  //   }, []); //первый паарметр - функция которая будет вызвана, второй параметр массив

  useEffect(() => {
    if (props.count >= 10) {
      setDelivery(true);
    }
    console.log("Значение props.count изменилось:", props.count);
  }, [props.count]); //props.count - переменная за которой мы следим, если она изменится, то функция внутри useEffect будет вызвана

  return (
    <div>
      I'm a children of {props.count}
      {delivery && <p>Вам доступна бесплатная доставка</p>}
    </div>
  );
};

export default Children;

// useEffect - хук который дает понять что компонент начал рисоваться и в функции которую мы передаем этому хуку можем делать сайд эффекты
// сайд эффекты - это когда мы делаем что-то вне React
// например: запросы на сервер, подписки на события, работа с таймерами, работа с DOM напрямую и т.д.

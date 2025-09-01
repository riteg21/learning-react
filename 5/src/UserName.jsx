import React from "react";

const UserName = (props) => {
  console.log(props);
  return props.userAge > 20 ? (
    <p className="drtbdgb">
      {props.userName}
      <button>Изменить имя</button>
    </p>
  ) : (
    <p className="drtbdgb">
      {props.userName} {props.userSurname}
    </p>
  );
};

export default UserName;

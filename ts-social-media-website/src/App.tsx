import React from "react";
import "./App.css";

interface UserInterface {
  name: string;
  age: number;
  email?: string; // null 허용
}

const App = () => {
  return (
    <div className="App">
      <User name="Dohyun" age={30} email="dev-do@naver.com" />
      <User name="Hoyoung" age={31} email="Hoyoung@naver.com" />
      <User name="경우의 수" age={50} />
    </div>
  );
};

const User = (props: UserInterface) => {
  const { name, age, email } = props;
  console.log(props);
  return (
    <div>
      <h1>{name}</h1>
      <h2>{age}</h2>
      <h2>{email}</h2>
    </div>
  );
};

export default App;

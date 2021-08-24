import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";

//useEffect는 componentWillUnmount, componentDidMount, componentWillupdate와 비슷함
const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};

function App() {
  const titleUpdater = useTitle("Hellloooooo");
  //5초 뒤에 제목 변경
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

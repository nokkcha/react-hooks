import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./styles.css";


//useInput은 기본적으로 input을 업데이트함 
//value 변수의 값을 갱신하려면 setValue를 호출하면 됩니다.
const useInput = (initialValue) => {
  const [value, setValue ] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    setValue(value);
  };

  return { value, onChange }
}

//useInput이 value를 리턴해서 name이 value랑 같아짐
function App(){
    const name = useInput("Kim MinSung");
    return (
    <div className="App">
      <h1>Hello</h1>
      <input placeholder="Name" value={name.value } onChange={name.onChange}></input>
      {/* 이렇게 쓰면 너무 길기 때문에 {...name}으로 그냥 unpack 가능. */}

    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
    <App />,
  rootElement
);

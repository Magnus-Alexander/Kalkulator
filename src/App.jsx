import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [modifier, setModifier] = useState("");
  const [count2, setCount2] = useState("");
  // const [setResult] = useState();

  let [addCount, setAddCount] = useState(0);
  function add() {
    count != "" ? setAddCount(addCount + 1) : console.log("");
    addCount < 1 &&
    count != "" &&
    modifier != "-" &&
    modifier != "X" &&
    modifier != "/"
      ? setModifier(modifier + "+")
      : console.log("Too many pluses");
  }
  let [subCount, setSubCount] = useState(0);
  function subtract() {
    count != "" ? setSubCount(subCount + 1) : console.log("");
    subCount < 1 &&
    count != "" &&
    modifier != "+" &&
    modifier != "X" &&
    modifier != "/"
      ? setModifier(modifier + "-")
      : console.log("Too many minuses");
  }
  let [multiCount, setMultiCount] = useState(0);
  function multiply() {
    count != "" ? setMultiCount(multiCount + 1) : console.log("");
    multiCount < 1 &&
    count != "" &&
    modifier != "+" &&
    modifier != "-" &&
    modifier != "/"
      ? setModifier(modifier + "X")
      : console.log("Too many multiplication symbols");
  }
  let [divCount, setDivCount] = useState(0);
  function divide() {
    count != "" ? setDivCount(divCount + 1) : console.log("");
    divCount < 1 &&
    count != "" &&
    modifier != "+" &&
    modifier != "-" &&
    modifier != "X"
      ? setModifier(modifier + "/")
      : console.log("Too many division symbols");
  }
  function reset() {
    setCount("");
    setCount2("");
    setModifier("");
    setAddCount((addCount = 0));
    setSubCount((subCount = 0));
    setMultiCount((multiCount = 0));
    setDivCount((divCount = 0));
  }
  function del() {}

  function one() {
    setCount(count + "1");
  }
  function two() {
    setCount(count + "2");
  }
  function three() {
    setCount(count + "3");
  }
  function four() {
    setCount(count + "4");
  }
  function five() {
    setCount(count + "5");
  }
  function six() {
    setCount(count + "6");
  }
  function seven() {
    setCount(count + "7");
  }
  function eight() {
    setCount(count + "8");
  }
  function nine() {
    setCount(count + "9");
  }
  function zero() {
    setCount(count + "0");
  }
  const [commaCount, setCommaCount] = useState(0);
  function comma() {
    setCommaCount(commaCount + 1);
    console.log(commaCount);
    if (commaCount < 1) {
      setCount(count + ",");
    } else {
      console.log("too many commas");
    }
  }
  return (
    <>
      <p>calc</p>
      <div className="space"></div>
      <div className="calcContainer">
        <div className="resultScreen">
          <p>
            {count} {modifier} {count2}
          </p>
        </div>
        <div className="space"></div>
        <div className="buttons">
          <button onClick={seven}>7</button>
          <button onClick={eight}>8</button>
          <button onClick={nine}>9</button>
          <button onClick={del} className="del">
            Del
          </button>
          <button onClick={four}>4</button>
          <button onClick={five}>5</button>
          <button onClick={six}>6</button>
          <button onClick={add}>+</button>
          <button onClick={one}>1</button>
          <button onClick={two}>2</button>
          <button onClick={three}>3</button>
          <button onClick={subtract}>-</button>
          <button onClick={comma}>,</button>
          <button onClick={zero}>0</button>
          <button onClick={divide}>/</button>
          <button onClick={multiply}>X</button>
          <div className="resetEquals">
            <button className="reset" onClick={reset}>
              Reset
            </button>
            <button className="equals">=</button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

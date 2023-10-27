import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [modifier, setModifier] = useState("");
  const [modifier2, setModifier2] = useState("");
  const [count2, setCount2] = useState("");
  let [result, setResult] = useState("");

  const [string, setString] = useState("");
  useEffect(() => {
    setString(count + modifier + count2 + modifier2 + result);
  }, [count, modifier, count2, modifier2, result]);
  console.log(`string is: ${string}`);

  const [addCount, setAddCount] = useState(0);
  function add() {
    count != "" ? setAddCount(addCount + 1) : console.log("");
    addCount < 1 &&
    count != "" &&
    modifier != "-" &&
    modifier != "x" &&
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
    modifier != "x" &&
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
      ? setModifier(modifier + "x")
      : console.log("Too many multiplication symbols");
  }

  let [divCount, setDivCount] = useState(0);
  function divide() {
    count != "" ? setDivCount(divCount + 1) : console.log("");
    divCount < 1 &&
    count != "" &&
    modifier != "+" &&
    modifier != "-" &&
    modifier != "x"
      ? setModifier(modifier + "/")
      : console.log("Too many division symbols");
  }

  function reset() {
    setCount("");
    setCount2("");
    setModifier("");
    setAddCount(0);
    setSubCount(0);
    setMultiCount(0);
    setDivCount(0);
    setCommaCount(0);
    setCommaCount2(0);
    setResult("");
    setModifier2("");
  }

  function del() {
    let newString = string.slice(0, -1);
    setString(newString);
    let parts = newString.split(/([+\-x/])/);
    setCount(parts[0]);
    setModifier(parts[1] || "");
    setCount2(parts[2] || "");
    setModifier2(parts[3] || "");
    setResult(parts[4] || "");
  }
  function zero() {
    modifier == ""
      ? setCount(count + "0")
      : modifier != ""
      ? setCount2(count2 + "0")
      : console.log(string);
  }

  function one() {
    modifier == ""
      ? setCount(count + "1")
      : modifier != ""
      ? setCount2(count2 + "1")
      : console.log(string);
  }

  function two() {
    modifier == ""
      ? setCount(count + "2")
      : modifier != ""
      ? setCount2(count2 + "2")
      : console.log(string);
  }

  function three() {
    modifier == ""
      ? setCount(count + "3")
      : modifier != ""
      ? setCount2(count2 + "3")
      : console.log(string);
  }

  function four() {
    modifier == ""
      ? setCount(count + "4")
      : modifier != ""
      ? setCount2(count2 + "4")
      : console.log(string);
  }

  function five() {
    modifier == ""
      ? setCount(count + "5")
      : modifier != ""
      ? setCount2(count2 + "5")
      : console.log(string);
  }

  function six() {
    modifier == ""
      ? setCount(count + "6")
      : modifier != ""
      ? setCount2(count2 + "6")
      : console.log(string);
  }

  function seven() {
    modifier == ""
      ? setCount(count + "7")
      : modifier != ""
      ? setCount2(count2 + "7")
      : console.log(string);
  }

  function eight() {
    modifier == ""
      ? setCount(count + "8")
      : modifier != ""
      ? setCount2(count2 + "8")
      : console.log(string);
  }

  function nine() {
    modifier == ""
      ? setCount(count + "9")
      : modifier != ""
      ? setCount2(count2 + "9")
      : console.log(string);
  }

  let [commaCount, setCommaCount] = useState(0);
  let [commaCount2, setCommaCount2] = useState(0);
  function comma() {
    console.log(commaCount);
    count != "" ? setCommaCount(commaCount + 1) : console.log("");
    commaCount < 1 && count != "" && modifier == ""
      ? setCount(count + ",")
      : modifier != "" && count2 !== "" && commaCount2 < 1
      ? (setCount2(count2 + ","), setCommaCount2(commaCount2 + 1))
      : console.log("too many commas");
  }

  function equals() {
    modifier == "+" && modifier2 != "="
      ? (setModifier2(modifier2 + "="),
        setResult((result = parseInt(count) + parseInt(count2))))
      : modifier == "-" && modifier2 != "="
      ? (setModifier2(modifier2 + "="),
        setResult((result = parseInt(count) - parseInt(count2))))
      : modifier == "x" && modifier2 != "="
      ? (setModifier2(modifier2 + "="),
        setResult((result = parseInt(count) * parseInt(count2))))
      : modifier == "/" && modifier2 != "="
      ? (setModifier2(modifier2 + "="),
        setResult((result = parseInt(count) / parseInt(count2))))
      : console.log(string);
  }
  return (
    <>
      <p>calc</p>
      <div className="space"></div>
      <div className="calcContainer">
        <div className="resultScreen">
          <p>{string}</p>
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
          <button onClick={multiply}>x</button>
          <div className="resetEquals">
            <button className="reset" onClick={reset}>
              Reset
            </button>
            <button onClick={equals} className="equals">
              =
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;

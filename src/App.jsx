import { useState, useEffect } from "react";
import "./App.css";
function App() {
  const [count, setCount] = useState("");
  const [modifier, setModifier] = useState("");
  const [count2, setCount2] = useState("");
  let [result, setResult] = useState(null);

  const [string, setString] = useState("");
  useEffect(() => {
    setString(count + modifier + count2);
  }, [count, modifier, count2]);

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

  const [subCount, setSubCount] = useState(0);
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

  const [multiCount, setMultiCount] = useState(0);
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

  const [divCount, setDivCount] = useState(0);
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
    setResult(null);
  }

  function del() {
    let newString = string.slice(0, -1);
    setString(newString);
    let parts = newString.split(/([+\-x/])/);
    console.log(parts);
    setCount(parts[0]);
    setModifier(
      parts[1] || ("" && setAddCount(0)),
      setSubCount(0),
      setMultiCount(0),
      setDivCount(0)
    );
    setCount2(parts[2] || "");
    setResult(parts[4] || null);

    modifier == "" || result != null
      ? (setAddCount(0), setSubCount(0), setMultiCount(0), setDivCount(0))
      : console.log("");
  }
  function zero() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "0")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "0")
      : console.log(string);
    console.log(string.length + 1);
  }
  function one() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "1")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "1")
      : console.log(string);
  }
  function two() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "2")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "2")
      : console.log(string);
  }
  function three() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "3")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "3")
      : console.log(`${"the string is "} ${string}`);
  }
  function four() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "4")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "4")
      : console.log(string);
  }
  function five() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "5")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "5")
      : console.log(string);
  }
  function six() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "6")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "6")
      : console.log(string);
  }
  function seven() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "7")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "7")
      : console.log(string);
  }
  function eight() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "8")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "8")
      : console.log(string);
  }
  function nine() {
    modifier == "" && string.length < 11 && result == null
      ? setCount(count + "9")
      : modifier != "" && string.length < 11 && result == null
      ? setCount2(count2 + "9")
      : console.log(string);
  }

  const [commaCount, setCommaCount] = useState(0);
  const [commaCount2, setCommaCount2] = useState(0);
  function comma() {
    console.log(commaCount);
    count != "" ? setCommaCount(commaCount + 1) : console.log("");
    commaCount < 1 && count != "" && modifier == "" && result == null
      ? setCount(count + ".")
      : modifier != "" && count2 !== "" && commaCount2 < 1 && result == null
      ? (setCount2(count2 + "."), setCommaCount2(commaCount2 + 1))
      : console.log("too much punctuation");
  }

  function equals() {
    modifier == "+"
      ? setResult((result = parseFloat(count) + parseFloat(count2)))
      : modifier == "-"
      ? setResult((result = parseFloat(count) - parseFloat(count2)))
      : modifier == "x"
      ? setResult((result = parseFloat(count) * parseFloat(count2)))
      : modifier == "/"
      ? setResult((result = parseFloat(count) / parseFloat(count2)))
      : console.log(count);
    setResult(parseFloat(result.toFixed(6)));
    setString("");
  }

  const [themeState, setThemeState] = useState("themeThree");
  function themeThree() {
    setThemeState("themeThree");
  }
  function themeTwo() {
    setThemeState("themeTwo");
  }
  function themeOne() {
    setThemeState("themeOne");
  }
  return (
    <>
      <section className="header">
        <div className="themeButtons">
          <button onClick={themeOne} className="button1">
            <p>1</p>
          </button>
          <button onClick={themeTwo} className="button2">
            <p>2</p>
          </button>
          <button onClick={themeThree} className="button3">
            <p>3</p>
          </button>
          <div className="space2"></div>
        </div>
        <div className="calcName">
          <p>calc</p>
        </div>
        <div className="THEME">
          <p>THEME</p>
          <div className="space"></div>
          <div className="slide">
            <div className="themeButtons2">
              <button onClick={themeOne}></button>
              <button onClick={themeTwo}></button>
              <button onClick={themeThree}></button>
            </div>
            <div className="dot"></div>
          </div>
        </div>
      </section>

      <div className="space3"></div>
      <div className="calcContainer">
        <div className="resultScreen">
          <p>
            {string} {result}
          </p>
        </div>
        <div className="space3"></div>
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
          <button onClick={comma}>.</button>
          <button onClick={zero}>0</button>
          <button onClick={divide}>/</button>
          <button onClick={multiply}>x</button>
        </div>
        <div className="resetEquals">
          <button className="reset" onClick={reset}>
            Reset
          </button>
          <button onClick={equals} className="equals">
            =
          </button>
        </div>
      </div>
      <style>{`
        @import url("${themeState}.css");
      
      `}</style>
    </>
  );
}
export default App;

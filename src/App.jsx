import React, { useState, useEffect } from "react";
import NumPad from "./components/NumPad";
import eq from "./components/eq";

function App() {
  const mathematics = ["/", "*", "-", "+"];

  const [display, setDisplay] = useState("");
  const [lastDigit, setLastDigit] = useState("");
  const [result, setResult] = useState("");
  const [isResulted, setIsResulted] = useState(false);

  useEffect(() => {
    document.addEventListener("keypress", detectKeyDown, true);
  });

  const detectKeyDown = (event) => {
    functionality(event.key);
  };

  function functionality(value) {
    console.log(value);
    if (value === "AC") {
      setDisplay([]);
      setResult("");
      //press an operand
    } else if (value === "=") {
      var index = 0;
      var totalLen = result.length;
      var total, num, operand, len;

      while (index !== totalLen) {
        if (index === 0) {
          total = parseFloat(result.substring(index, totalLen));
          len = total.toString.length;
          index += len;
          continue;
        }
        operand = result[index];
        num = parseFloat(result.substring(index + 1, totalLen));
        len = num.toString.length;
        total = eq(total, num, operand);
        index += len + 1;
      }

      setResult(total.toString());
      setDisplay("");
      setIsResulted(true);
    } else if (mathematics.includes(value) && lastDigit === "") {
      setLastDigit(value);
      setResult((prevValues) => {
        return prevValues.concat(value);
      });
      setDisplay("");
    } else if (!mathematics.includes(value)) {
      if (isResulted) {
        setLastDigit("");
        setDisplay(value);
        setResult("");
        setIsResulted(false);
        setResult((prevValues) => {
          return prevValues.concat(value);
        });
      } else {
        setDisplay((prevValues) => {
          return prevValues.concat(value);
        });
        setResult((prevValues) => {
          return prevValues.concat(value);
        });
      }
    }
  }

  return (
    <div>
      <input name="inputArea" value={display} rows={2} />
      <div>
        {/* {result ? result : ""} */}
        <p>{result}</p>
      </div>
      <table>
        <tr>
          <NumPad id="AC" value="AC" functionality={functionality} />
          {/* <NumPad id="+/-" value="+/-" functionality={functionality} /> */}
          <th />
          <NumPad id="%" value="%" functionality={functionality} />
          <NumPad id="/" value="/" functionality={functionality} />
        </tr>
        <tr>
          <NumPad value="7" functionality={functionality} />
          <NumPad value="8" functionality={functionality} />
          <NumPad value="9" functionality={functionality} />
          <NumPad value="*" functionality={functionality} />
        </tr>
        <tr>
          <NumPad value="4" functionality={functionality} />
          <NumPad value="5" functionality={functionality} />
          <NumPad value="6" functionality={functionality} />
          <NumPad value="-" functionality={functionality} />
        </tr>
        <tr>
          <NumPad value="1" functionality={functionality} />
          <NumPad value="2" functionality={functionality} />
          <NumPad value="3" functionality={functionality} />
          <NumPad value="+" functionality={functionality} />
        </tr>
        <tr>
          <NumPad value="0" functionality={functionality} />
          <NumPad value="." functionality={functionality} />
          <NumPad value="=" functionality={functionality} />
        </tr>
      </table>
    </div>
  );
}

export default App;

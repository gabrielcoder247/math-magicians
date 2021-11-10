import React, { useState } from "react";
import "./Css/Calculator.css";

import Button from "./button";

const Calculator = () => {
  const [obj, setObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  let someValue = "0";
  const { total, next } = obj;
  if (next !== null) {
    someValue = next;
  }
  if (total !== null && next === null) {
    someValue = total;
  }

  return (
    <div id="keyboard">
      <input type="text" id="display" value={someValue} /> <br />
      <Button value="AC" obj={obj} func={setObj} />{" "}
      <Button value="+/-" obj={obj} func={setObj} />{" "}
      <Button value="%" obj={obj} func={setObj} />{" "}
      <Button value="/" obj={obj} func={setObj} className="operators" />
      <Button value="7" obj={obj} func={setObj} />{" "}
      <Button value="8" obj={obj} func={setObj} />{" "}
      <Button value="9" obj={obj} func={setObj} />{" "}
      <Button value="*" obj={obj} func={setObj} className="operators" />
      <Button value="4" obj={obj} func={setObj} />{" "}
      <Button value="5" obj={obj} func={setObj} />{" "}
      <Button value="6" obj={obj} func={setObj} />{" "}
      <Button value="-" obj={obj} func={setObj} className="operators" />
      <Button value="1" obj={obj} func={setObj} />{" "}
      <Button value="2" obj={obj} func={setObj} />{" "}
      <Button value="3" obj={obj} func={setObj} />{" "}
      <Button value="+" obj={obj} func={setObj} className="operators" />
      <Button value="0" obj={obj} func={setObj} id="zero" />
      <Button value="." obj={obj} func={setObj} />{" "}
      <Button value="=" obj={obj} func={setObj} className="operators" />
    </div>
  );
};

export default Calculator;

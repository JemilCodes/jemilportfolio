import React, { useState } from "react";

export default function App() {
  const [input1, setInput1] = useState("#00ff00");
  const [input2, setInput2] = useState("#ffbb00");
  const [gradient, setGradient] = useState(true);

  const inputPicker = (event) => {
    setInput1(event.target.value);
  };
  const inputPicker2 = (event) => {
    setInput2(event.target.value);
  };

  let body = document.getElementById("body");

  body.style.background = `linear-gradient(${
    gradient ? "to right" : "to left"
  }, ${input1} ,  ${input2}  )`;

  const styles = {
    background: `linear-gradient(${
      gradient ? "to right" : "to left"
    }, ${input1} ,  ${input2}  )`,
  };

  const gradientToggler = () => {
    setGradient((prev) => !prev);
  };
  return (
    <div className="app-container">
      <header>
        <h1>BACKGROUND GENERATOR</h1>
      </header>
      <main>
        <input
          type="color"
          name="color1"
          onInput={inputPicker}
          value={gradient ? input1 : input2}
        />
        <input
          type="color"
          name="color2"
          onInput={inputPicker2}
          value={gradient ? input2 : input1}
        />
      </main>
      <section>
        <div>
          <h2>CURRENT CSS GRADIENT</h2>
          <h3>{`linear-gradient(${
            gradient ? "to right" : "to left"
          }, ${input1} ,  ${input2}  )`}</h3>
        </div>
      </section>
      <button style={styles} onClick={gradientToggler}>
        {gradient ? "to left" : "to right"}
      </button>
    </div>
  );
}

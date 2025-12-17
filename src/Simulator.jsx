import { useState } from "react";

export default function Simulator({ goHome }) {
  const [ledOn, setLedOn] = useState(false);

  function runCode() {
    setLedOn(true);
    setTimeout(() => setLedOn(false), 1000);
  }

  return (
    <div className="simulator">
      <header>
        <h2>ProtoWorks Studio – Simulator</h2>
        <button onClick={goHome}>Home</button>
      </header>

      <div className="workspace">
        <div className="canvas">
          <div className={`led ${ledOn ? "on" : ""}`} />
          <p>Arduino Pin 13 → LED</p>
        </div>

        <div className="code">
          <textarea
            defaultValue={`void setup() {
  pinMode(13, OUTPUT);
}

void loop() {
  digitalWrite(13, HIGH);
  delay(1000);
  digitalWrite(13, LOW);
  delay(1000);
}`}
          />
          <button onClick={runCode}>Run</button>
        </div>
      </div>
    </div>
  );
}

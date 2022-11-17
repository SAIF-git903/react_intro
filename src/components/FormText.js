import React, { useState } from "react";

export default function FormText(props) {
  let [text, setText] = useState("");

  function onChanging(event) {
    setText(event.target.value);
  }

  function toUpperCase() {
    let newText = text.toUpperCase();
    setText(newText);
  }

  function clearText() {
    let newText = "";
    setText(newText);
  }

  function CopyText() {
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  return (
    <>
      <div
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div>
          <textarea
            style={{
              backgroundColor: props.mode === "dark" ? "#212529" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            value={text}
            onChange={onChanging}
            className="form-control mb-4"
            id="myBox"
            rows="5"
          ></textarea>
        </div>
      </div>
      <button className="btn btn-primary mx-1" onClick={toUpperCase}>
        ToUpperCase
      </button>
      <button className="btn btn-primary" onClick={clearText}>
        Clear
      </button>
      <button className="btn btn-primary mx-1" onClick={CopyText}>
        Copy Text
      </button>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h1>Text Summary</h1>
        <p>
          {text.split(" ").filter((currValue) => currValue !== "").length} words
          and {text.trim().length} characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((currValue) => currValue !== "").length}{" "}
          Minutes reads
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

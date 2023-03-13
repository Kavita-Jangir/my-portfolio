import React, { useState } from "react";

function TextForms(props) {
  const handleUpClick = () => {
    //console.log("uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success");
  };
  const handlelowClick = () => {
    //console.log("uppercase was clicked"+text);
    let newText = text.toLocaleLowerCase();
    setText(newText);
    props.showAlert("Converted to lowerercase!", "success");
  };
  const handleClearAll = () => {
    setText(" ");
    props.showAlert("all cleared!", "success");
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    //console.log("On change");
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <div>
      <div
        className={`container py-3 text-${props.mode === "dark" ? "white" : "black" }`}
        // style={{ color: props.mode === "light" ? "black" : "white" }}
       id="textform">
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.mode === "light" ? "white" : "#13446e",
              color: props.mode === "light" ? "black" : "white",
            }}
            rows="3"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to uppercase
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handlelowClick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearAll}>
          Clear All
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={speak}>
          Speak
        </button>
      </div>
      <div
        className={`container py-3 text-${props.mode === "light" ? "black" : "white" }`}
        // style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Text Summary</h3>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length > 0 ? text : "Nothing to Preview"}</p>
      </div>
    </div>
  );
}
export default TextForms;

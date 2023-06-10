import React, { useState } from "react";

function TextForm(props) {
  const handleUpClick = () => {
    // console.log('Uppercase was clicked'+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase!", "success")
  };
  const handleOnChange = (event) => {
    // console.log('Text cleared');
    setText(event.target.value);
  };
  const lowerCaseClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lowercase!", "success")
  };
  const allClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is cleared!", "success")
  };
  const allCopyClick = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Copied to clipboard!", "success")
  };
  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("extra space is removed", "success")
  };
  const [text, setText] = useState("Please write here");

  return (
    <>
      <div
        className="container"
        style={{color: props.mode === "dark" ? "white" : "#223664" }}
      >
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white", color:props.mode === "dark" ? "white" : "#223664"
            }}
            id="mybox"
            rows="10"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={lowerCaseClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-secondary mx-1" onClick={allClearClick}>
          Clear All
        </button>
        <button className="btn btn-secondary mx-1" onClick={allCopyClick}>
          Copy All
        </button>
        <button className="btn btn-secondary mx-1" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container my-3"
        style={{color: props.mode === "dark" ? "white" : "#223664" }}
      >
        <h3>Your Text Summary</h3>
        <p>
          {text.split(" ").length}words and {text.length}characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <div>
          <h3>Preview</h3>
          <p>{text.length>0?text:"Enter something above to preview it here"}</p>
        </div>
      </div>
    </>
  );
}

export default TextForm;

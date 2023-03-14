import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("uppercase was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("converted to upperCase!" , "success");
  };
  const handleLwClick = () => {
    console.log("Lowercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("converted to lowerCase!" , "success");
  };
  const handleClearClick = () => {
    // console.log("Lowercase was clicked" + text);
    let newText = '';
    setText(newText);
    props.showAlert("Text cleared!" , "success");
  };
  const speak=()=>{
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }
  const handleCopy=()=>{
    console.log("i am a copy");
    var text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text copied!" , "success");
  }
  const downloadTxtFile = () => {
    const element = document.createElement("a");
    const file = new Blob([text], {
      type: "text/plain"
    });
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    element.click();
    props.showAlert("Downloading file" , "success");
}
const handleExtraSpaces = ()=>{
    let words = text.split(' ');
    let joinedWords = '';
    // console.log(words);
    words.forEach((elem)=>{
        if(elem[0] !== undefined){
            joinedWords += elem + " ";
            console.log(joinedWords);
        }
    })
    setText(joinedWords);
    props.showAlert("Extra space has been removed!" , "success");
}
  const RemoveExtraLines = () => {
    const newText = text.replace(/^\s*\n/gm, "") 
    setText(newText);
    props.showAlert("Exta Lines removed","success");
  }
  const handleOnChange = (event) => {
    console.log("on Change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter the text here");
  return (
    <>
    <div className="container" style={{ color:props.mode==='dark'?'white':'#042743'}} >
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{ backgroundColor:props.mode==='dark'?'grey':'white' , color: props.mode==='dark'?'white':'#042743'}}
          id="mybox"
          rows="8"
        ></textarea>
      </div>
      
      <button className="btn btn-primary mx-2" onClick={handleUpClick}>
        convert to upper case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLwClick}>
        convert to lower case
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        clear Text
      </button>
      <button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Read Aloud</button>
      <button className="btn btn-primary mx-2" onClick={handleCopy}>
        copy Text
      </button>
      <button className='btn btn-primary mx-2' onClick={downloadTxtFile}>Download Text</button>
      <button className='btn btn-primary mx-2' onClick={handleExtraSpaces }>Remove Extra Spaces</button>
      <button className="btn btn-primary mx-2" onClick={RemoveExtraLines}>
        Remove extra lines
      </button>

    </div>
    <div className="container my-3" style={{ color:props.mode==='dark'?'white':'#042743'}}>
        <h4>Your text Summary</h4>
        {/* <p>{text.split(" ").length} words and {text.length} characters</p> */}
        <p>{text ===""? 0 : text.split(" ").length} words and {text.replace(/ /g ,"").length} characters</p>
        <p>{0.008*(text ===""? 0 : text.split(" ").length)} Minutes read</p>
        <h4>Preview</h4>
        <p>{text.length=== 0 ? "Nothing to preview" : text}</p>
    </div>
    </>
  );
}

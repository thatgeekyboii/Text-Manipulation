import React from 'react'
import { useState } from 'react';

export default function TextForm(props) {
  
  //useState function

  // onclick function

  // HANDLE UPPERCASE
  const handleUpClick = () => {
    
        //console.log("button clicked");
        let newText = text.toUpperCase();
        setText(newText);  
        props.showAlert("Converted to Uppercase!","success") 
  }

  // HANDLE LOWERCASE
  const handleLowClick =() => {
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to Lowercase!","success") 

  }

  // CLEAR BUTTON
  const handleClearClick =() => {
    let lowText = '';
    setText(lowText);
    props.showAlert("Cleared!","success") 

  }
  const handleOnChange = (event) => {
    //console.log("onchange")
    setText(event.target.value);
  }


  // REMOVE EXTRA SPACES
  const removeExtraSpaces =() => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed!","success") 

  }

    // COPY FUNCTION
  const onCopyClick = () => {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("Extra Spaces Removed!","success") 

  }
  const [text,setText] = useState('');
  
  // text = "new text" // WRONG WAY TO CHANGE THE STATE
  // setText("new text") // CORRECT WAY TO CHANGE THE STATE
  return (
    <>
    <div className='container' style={{color:props.mode ==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode ==='dark'?'gray':'white',color:props.mode ==='dark'?'white':'black'}} onChange={handleOnChange} id="myBox" rows="8"></textarea>
  </div>
  <button className='btn btn-primary mx-1 my-1' onClick={handleUpClick}>Convert to Uppercase</button>
  <button className='btn btn-primary mx-1 my-1' onClick={handleLowClick}>Convert to Lowercase</button>
  <button className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
  <button className='btn btn-primary mx-1 my-1' onClick={onCopyClick}>Copy Text</button>
  <button className='btn btn-primary mx-1 my-1' onClick={removeExtraSpaces}>Remove Extra Space</button>




</div>

<div className='container my-5' style={{color:props.mode ==='dark'?'white':'black'}}>
    <h2>Your Text Summary</h2>
    <p><b>{text.split(" ").filter((element) => {return element.length!=0}).length}</b> Words and <b>{text.length}</b> Characters</p>

    {/* ADDING TIME FUNCTIONALITY */}
    <p><b>{0.008 * text.split(" ").length}</b> Minutes Read.</p>

    {/* GETTING PREVIEW OF THE TEXT */}
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter text in the box"}</p>
</div>
</>
  )
}

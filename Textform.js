import React, { useState } from 'react';

export default function Textform(props) {
  const [text, setText] = useState('');  // Start with an empty string

  // Function to handle the Uppercase button click
  const handleUppercaseClick = () => {
    setText(text.toUpperCase());  // Convert the text to uppercase
  };

  // Function to handle the Lowercase button click
  const handleLowercaseClick = () => {
    setText(text.toLowerCase());  // Convert the text to lowercase
  };

  // Function to handle the Clear Text button click
  const handleClearTextClick = () => {
    setText('');  // Clear all the text inside the textarea
  };

  // Function to handle textarea changes (user typing)
  const handleTextareaChange = (event) => {
    setText(event.target.value);  // Update text when user types
  };

  return (
    <>
      <div className="mb-3">
        {/* Display props.label and current text */}
        <label htmlFor="exampleFormControlTextarea1" className="form-label">
          {props.label}
        </label>
        <textarea 
          className="form-control" 
          id="exampleFormControlTextarea1" 
          rows="3"
          value={text} // Bind textarea to the 'text' state
          onChange={handleTextareaChange} // Update 'text' on typing
          placeholder="Enter text here" // Placeholder text
        />
        <div className="mt-3">
          {/* Uppercase Button */}
          <button className="btn btn-primary" onClick={handleUppercaseClick}>
            Convert to UpperCase
          </button>

          {/* Lowercase Button */}
          <button className="btn btn-success mx-2" onClick={handleLowercaseClick}>
            Convert to LowerCase
          </button>

          {/* Clear Text Button */}
          <button className="btn btn-danger" onClick={handleClearTextClick}>
            Clear Text
          </button>
        </div>
        <div className="container">
            <h1>Your text Summary</h1>
            <p>{text.trim().split(/\s+/).filter(Boolean).length} Words & {text.length} Characters</p>
             <p>{0.008 * text.split(" ").length}Minutes read</p>
              <div>
                <h1>Preview</h1>
              <p>{text}</p>
              </div>
        </div>
      </div>
    </>
  );
}

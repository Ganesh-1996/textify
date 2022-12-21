import PropTypes from 'prop-types'
import React from 'react';
import {useState} from 'react';
function Textarea(props){
    const [text,setText]=useState("");
    const toUpperCase=()=>{
        setText(text.toUpperCase());
    }
    const textOnChange=(event)=>{
        setText(event.target.value);
    }
    const toLowerCase=()=>{
        setText(text.toLowerCase());
    }
    const toBlank=()=>{
        setText("");
    }
    return(
        <>
        <div className="container">
            <h1 className={`heading mb-3 mt-3 text-${props.bwmode === 'dark'?'white':'dark'}`}>Please Enter the text below</h1>
          <textarea className="form-control" placeholder="Leave a comment here" value={text} onChange={textOnChange} id="floatingTextarea2" rows="8"></textarea>
          <button className="btn btn-primary mt-1" type="submit" onClick={toUpperCase}>Upper Case</button>
          <button className="btn btn-primary mt-1 mx-2" type="submit" onClick={toLowerCase}>Lower Case</button>
          <button className="btn btn-primary mt-1" type="submit" onClick={toBlank}>Clear text</button>

          </div>
          <div className={`container text-${props.bwmode === 'dark'? 'white':'dark'}`}>
            <h3>Word and Length count</h3>
            <p>{text.trim().split(/[\n ]+/).length} words and {text.length} letters</p>
          </div>
          <div className="container">
            <p>{text}</p>
          </div>
        </>
    );
}
export default Textarea;
Textarea.propTypes={
name:PropTypes.string
}
Textarea.defaultProps={name:"John Doe"}
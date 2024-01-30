import React, { useState } from 'react'


export default function Textform(props) {
    
    const handleUpperClick = () => {
        // console.log("button was clicked," + text)
        let newUpperText = text.toUpperCase();
        setText(newUpperText)
    }
    const handleLowerClick = () => {
        let newLowerText = text.toLowerCase();
        setText(newLowerText);
    }
    const handleClearClick = () => {
        let clearedText = '';
        setText(clearedText)
    }
    const copyText = () => {
        // var text = document.getElementById("myBox");
        // text.select();
        navigator.clipboard.writeText(text);
        // document.getSelection().removeAllRanges();
    }
    const handleOnChange = (event) => {
        //    console.log("on change")
        setText(event.target.value)
    }
    const handleExtraSpaces = () => {
        let newtext = text.split(/[ ]+/);
        setText(newtext.join(' '));
    }
    const [text, setText] = useState(" ");
    // setText("enter the text here")   -->to update the text
    return (
        <>
            <div className='container' style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h1>{props.heading} </h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? '#13466e' : 'white', color: props.mode === 'dark' ? 'white' : '#042743' }} id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpperClick}>Convert to uppercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowerClick}>Convert to lowercase</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={copyText}>Copy text</button>
                <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove extra space</button>
            </div>
            <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : '#042743' }}>
                <h2>Your text summary</h2>
                <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words,{text.length} charachters,{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>   
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in textbox to preview here.."}</p>
            </div>
        </>
    )

}

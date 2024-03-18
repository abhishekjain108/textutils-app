import React, { useState } from 'react'

const TextForm = (props) => {

    let [text , setText] =useState("")
    // text = "usdvushv" := Wrong way to change the state
    // setText("bibiebv") := Right way to chnage the state

    function handleUpClick(){
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to Upper Case", "success")
    }

    function handleLowClick(){
        let newText = text.toLowerCase()
        setText(newText)    
        props.showAlert("Converted to Lower Case", "success")
    }

    function handleClearClick(){    
        let newText = ("")
        setText(newText)
        props.showAlert("Cleared the Text", "success")
    }


    function handleChange(event){
      
            setText(event.target.value)
        
    }


    

  return (
    <>
    <div className="container" style={{color :props.mode === 'dark' ? 'white' : 'black'}}>
    <h1>{props.headingbox}</h1>
    <div className="mb-3">
    <textarea className="form-control" style={{backgroundColor :props.mode === 'dark' ? 'black' : 'white' , color :props.mode === 'dark' ? 'white' : 'black' }} onChange={handleChange} value={text} id="exampleFormControlTextarea1" rows="8"></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Upper</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Lower</button>
    <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>


    </div>

    <div className="container" style={{color :props.mode === 'dark' ? 'white' : 'black'}}> 
        <h1>Your Text Summary</h1>

        <p>{text.split(/\s+/).filter((elem)=>{return elem.length!==0}).length}  Words , {text.length}Characters </p>

        <p>{0.008 * text.split(" ").filter((elem)=>{return elem.length!==0}).length} Minutes to read</p>

        <h6>Preview :</h6>
        <p>{text}</p>
    </div>




    </>
  )
}

export default TextForm
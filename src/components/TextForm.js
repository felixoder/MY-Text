import React, { useState } from 'react';




  // Declare a new state variable, which we'll call "count"
  
  export default function TextForm(props) {
  
    const handleUpclick =()=>{
       
        let newText = text.toUpperCase();

        setText(newText)
        props.showAlert("Converted To UpperCase!" , "success");
    }
    
    const handleOnChange =(event)=>{
        
        setText(event.target.value)
    }
    const handleLwclick = ()=>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted To LowerCase!" , "success");
    }
    const handleRevclick = ()=>{
      let newText = text.split(" ").reverse().join(" ")
       setText(newText)
       props.showAlert("Converted To Reverse form!" , "success");
    }
    const handlePuncvclick = ()=>{
        function RemovePunc(text){

            let punctuationList = 
            /[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]/
              ;
              let newText = text.replace( punctuationList, "");
              return newText
        }
        let newText = RemovePunc(text);
        setText(newText)
        props.showAlert("Removed the all punctuations" , "success");

       
    }
    const handleWhiteRemvvclick  =()=>{
        let newText = text.replace(/\s+/g, ' ')
        setText(newText)
        props.showAlert("Removed the all WHiteSpaces" , "success");

    }
    const handleClearvclick =()=>{
        let newText ="";
        setText(newText)
        props.showAlert("All texts are cleared" , "success");
    }
    const handleBinaryToDecimalclick =()=>{
        
        
        let newText = parseInt(text , 2).toString()
        setText(newText)
        props.showAlert("The Binary is converted to Decimal" , "success");

    }
    const copy = () => {
        // Get the text to copy from the state
        
        var text = document.getElementById('mybox')
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("The text is copied !" , "success");
      
       
    };
        
    
    
    const [text, setText] = useState("");
    


  
  return (
    
    <>
    <div className='container'  style={{color:props.mode ==='dark' ?'white':'black '}}>
      <h1>{props.heading}</h1>
      
      <div className="mb-3">
        <textarea className="form-control" id="mybox" rows="8" value={text}  onChange={handleOnChange} style={{backgroundColor:props.mode ==='light' ?'white':'#232D3F' , color: props.mode ==='dark' ?'white':'black '} }></textarea>
      </div>
   

      <button className={`btn btn-${props.mode} mx-3 my-2`}   onClick={handleUpclick}>
        Convert to UpperCase
      </button>
      <button className={`btn btn-${props.mode} mx-3 my-2`}  onClick={handleLwclick}>
        Convert to LowerCase
      </button>
      <button className={`btn btn-${props.mode} mx-3 my-2`}   onClick={handleRevclick}>
        Make the Text Reverse
      </button>
      <button className={`btn btn-${props.mode} mx-3 my-2`} onClick={handlePuncvclick}>
        Remove the Punctuations
      </button>
      <button className={`btn btn-${props.mode} mx-3 my-2`} onClick={handleWhiteRemvvclick}>
        Remove the WhiteSpace
      </button>
      <button className={`btn btn-${props.mode} mx-3 my-2`}  onClick={handleClearvclick}>
        Clear the Text
      </button>
      <button className={`btn btn-${props.mode} mx-3 my-2`}   onClick={handleBinaryToDecimalclick}>
        Convert Binary To Decimal
      </button>
      
    </div>
    <div className="container my-3" id="textbox"  style={{color:props.mode ==='dark' ?'white':'black '}} >
        <h1>This is The summery of the Text</h1>
        <p> {text.trim() === "" ? 0 : text.split(/\s+/).length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length}Minutes Read</p>
        <h2>Preview</h2>
        <h5>{text.length>0 ? text:"Enter Something to preview the Text"}</h5>
        <button  className="copybutton" onClick={copy}>Copy text</button>
    </div>
    </>
    
  );
}
//style={{color:props.mode ==='dark' ?'white':'black '}} 


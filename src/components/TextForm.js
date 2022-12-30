import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleDownClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleClearClick = () => {
        let newText = ('');
        setWord(0);
        setChar(0);
        setFloat(0.0);
        setText(newText);
    }

    const removeExtras = () => {
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText);
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const timeCount = () => {

        let time;
        let summ1 = text.split(/\s+/).filter((element) => { return element.length !== 0 }).length;
        let summ2 = text.length - (summ1 - 1);

        if (summ2 === 0) {
            time = 0;
            summ1 = 0;
        }
        else {
            time = 0.008 * text.split(" ").length * 60;
        }


        setFloat(time);
        setWord(summ1);
        setChar(summ2);
    }


    const [text, setText] = useState('');
    const [float, setFloat] = useState(0);
    const [int1, setWord] = useState(0);
    const [int2, setChar] = useState(0);



    return (
        <>
            <div className="container my-5" style={{color : props.mode==='dark'?'white':'#0275d8'}}>
                <h2>{props.heading} </h2>
                <div className="mb-2">
                    <textarea className="form-control" value={text} style={{background : props.mode==='dark'?'white':'#000459',color:props.mode==='dark'?'black':'white'}}  onChange={handleOnChange} id="myBox" rows="8" placeholder='Enter Text Here'></textarea>
                </div>

                <button className={`btn btn-${props.mode === 'light' ? 'primary':'light'} my-1`} onClick={handleUpClick}>Convert to Upper Case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary':'light'} mx-1 my-1`} onClick={handleDownClick}>Convert to Lower Case</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary':'light'} mx-1 my-1`} onClick={handleClearClick}>Clear</button>
                <button className={`btn btn-${props.mode === 'light' ? 'primary':'light'} mx-1 my-1`} onClick={removeExtras}>Remove Spaces</button>
                <button className={`btn btn-${props.mode ==='light' ? 'primary':'light'} mx-1 my-1`} onClick={timeCount}>Go</button>

            </div>

            <div className="container my-5" style={{color : props.mode==='dark'?'white':'#0275d8'}}>
                <h2>Your Text Summary</h2>
                <p>{int1} words and {int2} characters</p>
                <p>{float} seconds read</p>
                <h3>Preview</h3>
                <p>{text}</p>
            </div>
        </>
    )
}


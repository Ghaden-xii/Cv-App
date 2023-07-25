import React, { useState } from "react";
import Preview from "./Preview";

export default function CvSection({ 
      title='',
      data={},
      handleInput,
      handleShow,
    }) {

    const labels = Object.keys(data);
    const inputValue = Object.values(data);

    const handleSubmit = (e) => {

        if (!data.show) {
            handleShow((prevState) => ({...prevState, show: true}));
        } else {
            handleShow((prevState) => ({...prevState, show: false}));
        }

        e.preventDefault();
    }

    return(
        <>
        
          <h1 className="title">{title}</h1>
          {labels.map(( label, index ) => {
            
            // stop map from rendering input for show 
            if (label === 'show') {
                return
            }

            return(
                <div key={index}>
                <label htmlFor={label}>
                    {label}:
                    <input 
                        id={label} 
                        onChange={handleInput} 
                        className="data"
                        value={inputValue[index]}>
                    </input>
                </label>
                </div>
            )
          })}
          <button 
            type="" 
            onClick={handleSubmit}>
                Preview</button>
        </>
    )
}
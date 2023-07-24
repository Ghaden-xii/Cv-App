import React, { useState } from "react";
import Preview from "./Preview";

export default function CvSection({ 
      title,
      data,
      handleInput,
      isShown, 
      handleShow 
    }) {

    const labels = Object.keys(data);
    const inputValue = Object.values(data);

    const handleSubmit = () => {

        if (!isShown) {
            handleShow(true);
        } else {
            handleShow(false);
        }

    }

    return(
        <>
        
          <h1 className="title">{title}</h1>
          {labels.map(( label, index ) => {
            
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
                Submit</button>
        </>
    )
}
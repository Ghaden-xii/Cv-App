/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Preview from "./Preview";

export default function CvSection( props ) {

    const {fields, values, handleInput, handleShow} = props;

    const previewEvent = (e) => {
        e.preventDefault();

        if (!values.show) {
            handleShow( ( prevState ) => ({ ...prevState, show: true }) )
        } else {
            handleShow( ( prevState ) => ({ ...prevState, show: false }) )
        }
    }

    return(
        <>
        
        <h1 className="title">{props.title}</h1>
        {
            fields.map(( data ) => {
                
                return (
                
                    <label key={data.id} className="label" htmlFor={data.name}>{data.label}
                        <input id={data.id}
                        className="input" 
                        name={data.name}
                        type={data.type} 
                        placeholder={data.placeholder}
                        value={values[data.name]}
                        onChange={handleInput}/>
                    </label>
                )
            })
        }
        <button className={`${props.title} preview btn`} onClick={previewEvent}>Preview</button>
        </>
    )
}
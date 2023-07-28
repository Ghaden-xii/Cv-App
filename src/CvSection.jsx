/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Preview from "./Preview";

export default function CvSection( props ) {

    const {fields, values, handleInput} = props;

    return(
        <>
        
        <h1 className="title">{props.title}</h1>
        {
            fields.map(( data ) => {
                
                return (
                
                    <label key={data.id} htmlFor={data.name}>{data.label}
                        <input id={data.id} 
                        name={data.name}
                        type={data.type} 
                        placeholder={data.placeholder}
                        value={values[data.name]}
                        onChange={handleInput}/>
                    </label>
                )
            })
        }
        <button type="" onClick={props.handleShow}>Preview</button>

        </>
    )
}
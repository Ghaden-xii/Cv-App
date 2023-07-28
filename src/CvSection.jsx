/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Preview from "./Preview";

export default function CvSection( props ) {

    const {fields, values} = props;

    return(
        <>
        
        <h1 className="title">{props.title}</h1>
        {
            fields.map(( data, index ) => {
                
                return (
                
                    <label key={index} htmlFor={data.name}>{data.label}
                        <input id={data.id} 
                        name={data.name}
                        type={data.type} 
                        placeholder={data.placeholder}
                        value={values[data.name]}
                        onChange={props.handleInput}/>
                    </label>
                )
            })
        }
        <button type="" onClick={props.handleShow}>Preview</button>

        </>
    )
}
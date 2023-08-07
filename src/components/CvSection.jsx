/* eslint-disable react/prop-types */
import React, { useState } from "react";
import Preview from "./Preview";

export default function CvSection({ title, fields, values, handleInput, handleShow }) {

    return(
        <>
        
        <h1 className="title">{title}</h1>
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
                        onChange={handleInput}
                        disabled={values.show} />
                    </label>
                )
            })
        }
        <button className={`${title} preview btn`} onClick={handleShow}>Preview</button>
        </>
    )
}
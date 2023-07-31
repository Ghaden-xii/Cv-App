/* eslint-disable react/prop-types */
import React from "react";

export default function Preview( props ) {

    const {inputsObj, section} = props;
    
    const  labels = inputsObj.map( (label) => {
        
        try {
            const input = document.getElementById(label.id);
            
            if (input === null) return;
            
            return(
                <div className="preview-label" key={`preview-${label.id}`}>
                    <span>{label.label}
                        <p>{input.value}</p>
                    </span>
                </div>
                )
        } catch (error) {
            // avoid crash on first render
            console.error("Error occurred while accessing input element, input is null:", error);
        }
    });

    return (
        <div className="preview-section"
        style={{display: section.show ? 'block': 'none'}}>
            {labels}
        </div>
    )

}
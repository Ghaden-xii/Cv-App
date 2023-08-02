/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

export default function Preview( props ) {

    const {inputsObj, section} = props;
    const [previewData, setPreviewData] = useState(section);

    return (
        <div className="preview-section"
        style={{display: section.show ? 'block': 'none'}}>
            {inputsObj.map( ( item ) => {
        
            try {
                return(
                    <div className="preview-div" key={item.id}>
                        <ul className="preview-label">
                            {item.label}
                            <li className="preview-value">
                                {previewData[item.name]}
                            </li>
                        </ul>
                    </div>
                    )
            } catch (error) {
                // avoid crash on first render
                console.error(error);
                return null
                }
            })}
        </div>
    )

}
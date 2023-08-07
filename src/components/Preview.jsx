/* eslint-disable react/prop-types */
import React from "react";
import { useState } from "react";

export default function Preview({ title, inputsObj, section, setSection }) {

    const [previewData, setPreviewData] = useState(section);

    const handleEdit = () => {
        
        if ( JSON.stringify(section) === JSON.stringify(previewData) ) {
            setSection( (prevState) => ({
                ...prevState,
                show: false,
            }))
            return
        }

        setSection({...previewData});
    }

    return (
        <div className="preview-section"
        style={{display: section.show ? 'block': 'none'}}>
            
            <h1 className="title">{title}</h1>

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
            <button className={`edit-${title}`} onClick={handleEdit} >Edit</button>
        </div>
    )

}
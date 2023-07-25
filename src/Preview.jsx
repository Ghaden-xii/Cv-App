import React from "react";
import { useState } from "react";

export default function Preview({ title='',
        respData={},
    }) {
    

    const newRespData = {...respData}
    const [formValues, setFormValues] = useState({});

    const labels = Object.keys(respData);
    const inputs = Object.values(respData);

    return (
        <div className="preview-div" 
             style={{display: respData.show === false ?
             'none' : 'block'}}>
            
            {labels.map( (label, index) => {

                if (label === 'show') return // prevent [show] from rendering 

                return(
                    <div key={label}>
                        <span> {label}
                            <p>{inputs[index]}</p>
                        </span>
                    </div>
                )
            })}
        </div>
    )

}
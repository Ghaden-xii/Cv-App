import React from "react";

export default function Preview({ labels=[], inputs=[] }) {



    return (
        <div className="preview-div">
            {labels.map( (label, index) => {
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
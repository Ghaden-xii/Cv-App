import React from "react";
import CvSection from './CvSection'
import Preview from "./Preview";
import { useState } from "react";

export default function CvForm() {
    
    const [ generalInf, setGeneralInf ] = useState({
        name: "",
        mail: "",
        phone: "",
        show: false,
    });
    
    const [ educationInf, setEducationInf ] = useState({
        school: "",
        title: "",
        date: undefined,
        show: false,
    });

    const [ practicalInf, setPracticalInf ] = useState({
        company: "",
        position: "",
        duties: "",
        from: undefined,
        to: undefined,
        show: false,
    });

    const inputs = [
            [
                {
                    id: 1,
                    name: "name",
                    type: "text",
                    placeholder: "Full name",
                    label: "Full name: ", 
                },
                {
                    id: 2,
                    name: "mail",
                    type: "email",
                    placeholder: "Email Address",
                    label: "Email: ", 
                },
                {
                    id: 3,
                    name: "phone",
                    type: "number",
                    placeholder: "Phone Number",
                    label: "Phone #: ", 
                },
            ],
            [
                {
                    id: 4,
                    name: "school",
                    type: "text",
                    placeholder: "Institution Name",
                    label: "Institution: ", 
                },
                {
                    id: 5,
                    name: "title",
                    type: "text",
                    placeholder: "Title of Study",
                    label: "Title: ", 
                },
                {
                    id: 6,
                    name: "date",
                    type: "date",
                    placeholder: "Date",
                    label: "Date: ", 
                },
            ],
            [
                {
                    id: 7,
                    name: "company",
                    type: "text",
                    placeholder: "Name of the Company",
                    label: "Company: ", 
                },
                {
                    id: 8,
                    name: "position",
                    type: "text",
                    placeholder: "Position / Role",
                    label: "Position: ", 
                },
                {
                    id: 9,
                    name: "duties",
                    type: "text",
                    placeholder: "Responsibilities / Duties",
                    label: "Responsibilities : ", 
                },
                {
                    id: 10,
                    name: "from",
                    type: "date",
                    placeholder: "When did you started...",
                    label: "From: ", 
                },
                {
                    id: 11,
                    name: "to",
                    type: "date",
                    placeholder: "When did you finish...",
                    label: "To: ", 
                },
            ],
        ]

    const handleInput = ( e ) => {
        console.log(e.target);
        
        const {id, value, name} = e.target;

        if ( 0 < id && id <= 3) {
            setGeneralInf((prevState) => ({ ...prevState, [name]: value}));
        }
        
        if ( 3 < id && id <= 6) {
            setEducationInf((prevState) => ({ ...prevState, [name]: value}));
        }
        
        if ( 6 < id && id <= 11) {
            setPracticalInf((prevState) => ({ ...prevState, [name]: value}));
        }
        
    }


    return(
        <div className="app">
            <form className="input-form">
              <CvSection title='General' 
                fields={inputs[0]}
                values={generalInf} 
                handleInput={handleInput}
                handleShow={setGeneralInf} />

              <CvSection title='Education' 
                fields={inputs[1]}
                values={educationInf} 
                handleInput={handleInput}
                handleShow={setEducationInf} />

              <CvSection title='Practical' 
                fields={inputs[2]} 
                values={practicalInf}
                handleInput={handleInput}
                handleShow={setGeneralInf} />
            </form>
            
            <div className="form-preview">
                <Preview section={generalInf} inputsObj={inputs[0]} />
                <Preview section={educationInf} inputsObj={inputs[1]} />
                <Preview section={practicalInf} inputsObj={inputs[2]} />
            </div>
        </div>
    )
}
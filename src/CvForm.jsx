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
        clicked: 0,
    });
    
    const [ educationInf, setEducationInf ] = useState({
        school: "",
        title: "",
        date: undefined,
        show: false,
        clicked: 0,
    });

    const [ practicalInf, setPracticalInf ] = useState({
        company: "",
        position: "",
        duties: "",
        from: undefined,
        to: undefined,
        show: false,
        clicked: 0,
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

    const previewEvent = (e) => {
        
        e.preventDefault();

        const {className} = e.target;
        
        console.log(generalInf.clicked, generalInf.show);

        if ( className.includes('General') ) {

            setGeneralInf( (prevState) => ({
                ...prevState,
                clicked: prevState.clicked + 1}));

            generalInf.show ? 
                setGeneralInf((prevState) => ({ ...prevState, show: false})):
                setGeneralInf((prevState) => ({ ...prevState, show: true}));
            
        }
        
        if ( className.includes('Education') ) {
            
            setEducationInf( (prevState) => ({
                ...prevState,
                clicked: prevState.clicked + 1}));
            
            educationInf.show ?
                setEducationInf((prevState) => ({ ...prevState, show: false})):
                setEducationInf((prevState) => ({ ...prevState, show: true}));
        }
        
        if ( className.includes('Practical') ) {

            setPracticalInf( (prevState) => ({
                ...prevState,
                clicked: prevState.clicked + 1}));

            practicalInf.show ?
                setPracticalInf((prevState) => ({ ...prevState, show: false})):
                setPracticalInf((prevState) => ({ ...prevState, show: true}));
        }
    }

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
                handleShow={previewEvent} />

              <CvSection title='Education' 
                fields={inputs[1]}
                values={educationInf} 
                handleInput={handleInput}
                handleShow={previewEvent} />

              <CvSection title='Practical' 
                fields={inputs[2]} 
                values={practicalInf}
                handleInput={handleInput}
                handleShow={previewEvent} />
            </form>
            
            <div className="form-preview">
                {
                    generalInf.show ? 
                    <Preview section={{...generalInf}} inputsObj={inputs[0]} /> :
                    null
                }
                {
                    educationInf.show ? 
                    <Preview section={{...educationInf}} inputsObj={inputs[1]} /> :
                    null
                }
                {
                    practicalInf.show ? 
                    <Preview section={{...practicalInf}} inputsObj={inputs[2]} /> :
                    null
                }
            </div>
        </div>
    )
}
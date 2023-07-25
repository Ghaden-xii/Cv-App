import React from "react";
import CvSection from './CvSection'
import Preview from "./Preview";
import { useState } from "react";

export default function CvForm() {
    
    const [ generalInf, setGeneralInf ] = useState({
        name: '',
        email: '',
        phone: '',
        show: false,
    });
    
    const [ educationInf, setEducationInf ] = useState({
        school: '',
        title: '',
        date: '',
        show: false,
    });

    const [ practicalInf, setPracticalInf ] = useState({
        company: '',
        position: '',
        duties: '',
        from: '',
        to: '',
        show: false,
    });

    const handleInput = ( e ) => {
        const {id, value} = e.target;
        
        if (Object.hasOwn(generalInf, id)) {
            setGeneralInf( (prevState) => ({...prevState, [id]: value}))
        }

        else if (Object.hasOwn(educationInf, id)) {
            setEducationInf( (prevState) => ({...prevState, [id]: value}))
        }

        else if (Object.hasOwn(practicalInf, id)) {
            setPracticalInf( (prevState) => ({...prevState, [id]: value}))
        }
    }

    return(
        <>
            <form action="" method="">
              <CvSection title='General' 
                data={generalInf} 
                handleInput={handleInput}
                handleShow={setGeneralInf} />

              <CvSection title='Education' 
                data={educationInf} 
                handleInput={handleInput}
                handleShow={setEducationInf} />

              <CvSection title='Practical' 
              data={practicalInf} 
              handleInput={handleInput}
              handleShow={setGeneralInf} />
            </form>
            
            <Preview title='General' respData={generalInf} />
            <Preview title='Education' respData={educationInf} />
            <Preview title='Practical' respData={practicalInf} />
        </>
    )
}
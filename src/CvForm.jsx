import React from "react";
import CvSection from './CvSection'
import Preview from "./Preview";
import { useState } from "react";

export default function CvForm() {
    
    const [ generalInf, setGeneralInf ] = useState({
        name: '',
        email: '',
        phone: '',
    });
    
    const [ educationInf, setEducationInf ] = useState({
        school: '',
        title: '',
        date: '',
    });

    const [ practicalInf, setPracticalInf ] = useState({
        company: '',
        position: '',
        duties: '',
        from: '',
        to: '',
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
                handleInput={handleInput} />

              <CvSection title='Education' 
                data={educationInf} 
                handleInput={handleInput} />

              <CvSection title='Practical' 
              data={practicalInf} 
              handleInput={handleInput} />
            </form>
        </>
    )
}
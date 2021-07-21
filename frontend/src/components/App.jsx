import React, {useState} from 'react';
import Step from "./Step"
import Form from "./Form"
import Form2 from "./Form2"
import Form3 from "./Form3"
import axios from "axios";

function App() {

    const [savedData, setSavedData] = useState({})

    const [isActive, setIsActive] = useState(false)

    const [isClicked, setIsClicked] = useState(false)

    const [select, setSelect] = useState("Please choose your gender")

    const [step, setStep] = useState({
        fName: "",
        lName: "",
        eMail: "",
        telephone: "",
        birth: "",
        comments: ""
    })


    function handleClick(event) {
        event.preventDefault();
        setSavedData({
            fName: step.fName,
            lName: step.lName,
            eMail: step.eMail
        })
        console.log(savedData)
        setIsActive(!isActive);
    }

    function secondSubmit(event) {
        event.preventDefault();
        setSavedData(prevData => {
            return {
            ...prevData,
            telephone: step.telephone,
            gender: select,
            birth: step.birth
            }
        })
        console.log(savedData)
    }

    function thirdSumbit(event) {
        event.preventDefault();
        setSavedData(prevData => {
            return {
            ...prevData,
            comments: step.comments
            }
        })
        console.log(savedData)
        setIsClicked(true)
        axios.post("http://localhost:3001/create", savedData)
    }

    function handleChange(event) {
        const {value, name} = event.target
        setStep((prevValue) => {
            return {
                ...prevValue,
                [name]: value
            }
        })
    }

    function handleChangeSelect(event) {
        const selectedGender = event.target.value
        setSelect(selectedGender)
    }
   
    const data = [{
        title: "Step 1: Your Details",
        content: <Form step={step} handleChange={handleChange} handleClick={handleClick} />
    },
    {
        title: "Step 2: More Comments",
        content: <Form2 step={step} 
                        handleChange={handleChange} 
                        handleClick={secondSubmit} 
                        handleChangeSelect={handleChangeSelect} 
                        select={select} />
    },
    {
        title: "Step 3: Final Comments",
        content: <Form3 isClicked={isClicked} step={step} handleChange={handleChange} handleClick={thirdSumbit}/>
    }]

    return (
        <div>
            <div className="container-steps">
                {data.map(({title, content}) => (
                    <Step title={title} 
                          content={content} />
                ))}
            </div>
        </div>
    )
}

export default App;
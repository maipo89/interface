import React from 'react';

function Form2(props) {

    return (
        <div>
                <label className="form-label">
                    <div onChange={props.handleChange} value={props.step.telephone} className="form">
                        <div>
                            <h3>Telephone number</h3>
                            <input type="text" name="telephone" onChange={props.handleChange} value={props.step.telephone} />
                        </div>
                        <div>
                            <h3>Gender</h3>
                            <select onChange={props.handleChangeSelect} value={props.select}>
                                <option value="female">Female</option>
                                <option value="male">Male</option>
                                <option value="I prefer not to say">I prefer not to say</option>
                            </select>
                        </div>
                        <div>
                            <h3>Date of birth</h3>
                            <input onChange={props.handleChange} value={props.step.birth} placeholder="../../...." name="birth" type="text" />
                        </div>
                    </div>
                    <button onClick={props.handleClick}>Next ></button>
                </label>
        </div>
    )
}

export default Form2
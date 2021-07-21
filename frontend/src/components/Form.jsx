import React from 'react';

function Form(props) {

    return (
        <div>
                <label className="form-label">
                    <div className="form">
                        <div>
                            <h3>Name</h3>
                            <input required value={props.step.fName} onChange={props.handleChange} name="fName" type="text" />
                        </div>
                        <div>
                            <h3>Surname</h3>
                            <input required value={props.step.lName} onChange={props.handleChange} name="lName" type="text" />
                        </div>
                        <div>
                            <h3>E-mail Address</h3>
                            <input required value={props.step.eMail} onChange={props.handleChange} name="eMail" type="text" />
                        </div>
                    </div>
                    <button onClick={props.handleClick}>Next ></button>
                </label>
        </div>
    )
}

export default Form
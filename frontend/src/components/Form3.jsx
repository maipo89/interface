import React from 'react';

function Form3(props) {

    return (
        <div>
                <label className="form-label">
                    <div>
                        <h3>Comments:</h3>
                        <textarea required value={props.step.comments} onChange={props.handleChange} name="comments" type="text" />
                    </div>
                    <button onClick={props.handleClick} type="submit">{props.isClicked ? <p>Submit ></p> : <p>Next ></p> }</button>
                </label>
        </div>
    )
}

export default Form3
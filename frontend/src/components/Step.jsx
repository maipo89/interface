import React, {useState} from 'react';

function Step(props) {

      const [isActive, setIsActive] = useState(false)

      return (
          <div>
            <div onClick={() => setIsActive(!isActive)} className="step">
                    <h1>{props.title}</h1> 
            </div>
            { isActive && <div className="content">{props.content}</div> }
          </div>  
      )
}

export default Step; 
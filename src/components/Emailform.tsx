import { FormStage } from "../common/enums"
import { SetStage } from "../common/types"



const EmailForm: React.FC<{setStage: SetStage}> = ({ setStage }) => {

  const handleClick = () => {
    
    setStage(FormStage.Personal)
  }
    return (
        <>
         <h2 className="form--header">Welcome</h2>
        <p className="form--prompt">Enter Your Username and Email</p>
        <input type="text" className="form--input" placeholder="Username" style={{borderColor: ""}}/>
        <input type="text" className="form--input" placeholder="Email" />
        <div className="form--step-btn-container">
          <button type="button" className="form--step-btn" onClick={handleClick}>Next</button>
        </div>
        </>
    )
}


export default EmailForm
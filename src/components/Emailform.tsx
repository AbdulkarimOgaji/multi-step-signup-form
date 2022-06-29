import { SetStage } from "../common/types"



const EmailForm: React.FC<{setStage: SetStage}> = ({ setStage }) => {
    return (
        <>
         <h2 className="form--header">Welcome</h2>
        <p className="form--prompt">Enter Your Email and Password</p>
        <input type="text" />
        <div className="change-step">
          <button>Previous</button>
          <button>Next</button>
        </div>
        </>
    )
}


export default EmailForm
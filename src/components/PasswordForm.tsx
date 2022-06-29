import { SetStage } from "../common/types"



const PasswordForm: React.FC<{setStage: SetStage}> = ({ setStage }) => {
    return (
        <>
         <h2 className="form--header">Welcome</h2>
        <p className="form--prompt">Enter Your Password</p>
        <input type="text" />
        <div className="change-step">
          <button>Previous</button>
          <button>Next</button>
        </div>
        </>
    )
}


export default PasswordForm
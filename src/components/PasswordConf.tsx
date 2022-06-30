import { useDispatch, useSelector } from "react-redux";
import { FormStage } from "../common/enums";
import { SetStage } from "../common/types"
import { setPasswordConf } from "../store/loginSlice";
import { RootState } from "../store/store";



const PasswordConf: React.FC<{setStage: SetStage}> = ({ setStage }) => {
  const { passwordConf } = useSelector(
    (state: RootState) => state.loginDetails
  );
  const dispatch = useDispatch();


  const borderColor = passwordConf.err ? "crimson" : "#282c34"
  return (
    <>
      <h2 className="form--header">Confirm Password</h2>
      <p className="form--prompt">Re Enter Your Password</p>
      <div className="form-input-container">
        <p className="form-error-text">{passwordConf.err}</p>

        <input
          type="password"
          className="form--input"
          placeholder="Password Confirm"
          style={{ borderColor }}
          value={passwordConf.val}
          onChange={(e) => dispatch(setPasswordConf(e.currentTarget.value))}
        />
      </div>

      <div className="form--step-btn-container">
        <button
          type="button"
          className="form--step-btn"
          onClick={() => setStage(FormStage.Password)}
        >
          Previous
        </button>
      </div>
    </>
  );
}


export default PasswordConf
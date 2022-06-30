import { useDispatch, useSelector } from "react-redux";
import { FormStage } from "../common/enums";
import { SetStage } from "../common/types"
import { setPassword } from "../store/loginSlice";
import { RootState } from "../store/store";



const PasswordForm: React.FC<{setStage: SetStage}> = ({ setStage }) => {
  const { password } = useSelector(
    (state: RootState) => state.loginDetails
  );
  const dispatch = useDispatch();


  const borderColor = password.err ? "crimson" : "#282c34"
  return (
    <>
      <h2 className="form--header">Confirm Password</h2>
      <p className="form--prompt">Enter Your Password</p>
      <div className="form-input-container">
        <p className="form-error-text">{password.err}</p>

        <input
          type="password"
          className="form--input"
          placeholder="Password"
          style={{ borderColor }}
          value={password.val}
          onChange={(e) => dispatch(setPassword(e.currentTarget.value))}
        />
      </div>

      <div className="form--step-btn-container">
        <button
          type="button"
          className="form--step-btn"
          onClick={() => setStage(FormStage.Personal)}
        >
          Previous
        </button>
      </div>
    </>
  );
}


export default PasswordForm
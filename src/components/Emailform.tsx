import { useDispatch, useSelector } from "react-redux";
import { FormStage } from "../common/enums";
import { SetStage } from "../common/types";
import { setEmail, setUsername } from "../store/loginSlice";
import { RootState } from "../store/store";

const EmailForm: React.FC<{ setStage: SetStage }> = ({ setStage }) => {
  const { username, email } = useSelector(
    (state: RootState) => state.loginDetails
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!username.err && !email.err) {
      setStage(FormStage.Personal);
    }
  };
  return (
    <>
      <h2 className="form--header">Welcome</h2>
      <p className="form--prompt">Enter Your Username and Email</p>
      <div className="form-input-container">
        <p className="form-error-text">{username.err}</p>

        <input
          type="text"
          className="form--input"
          placeholder="Username"
          style={{ borderColor: "" }}
          value={username.val}
          onChange={(e) => dispatch(setUsername(e.currentTarget.value))}
        />
      </div>
      <div className="form-input-container">
        <p className="form-error-text">{email.err}</p>
        <input
          type="text"
          className="form--input"
          placeholder="Email"
          value={email.val}
          onChange={(e) => dispatch(setEmail(e.currentTarget.value))}
        />
      </div>

      <div className="form--step-btn-container">
        <button type="button" className="form--step-btn" onClick={handleClick}>
          Next
        </button>
      </div>
    </>
  );
};

export default EmailForm;

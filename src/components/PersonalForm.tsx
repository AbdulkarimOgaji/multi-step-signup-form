import { useDispatch, useSelector } from "react-redux";
import { FormStage } from "../common/enums";
import { SetStage } from "../common/types";
import { setAddress, setPhone } from "../store/loginSlice";
import { RootState } from "../store/store";

const PersonalForm: React.FC<{ setStage: SetStage }> = ({ setStage }) => {
  const { phone, address } = useSelector(
    (state: RootState) => state.loginDetails
  );
  const dispatch = useDispatch();

  const handleNextClick = () => {
    if (!phone.err && !address.err && phone.val && address.val) {
      setStage(FormStage.Password);
    }
  };
  return (
    <>
      <h2 className="form--header">Personal Details</h2>
      <p className="form--prompt">Enter Your phone number and address</p>
      <div className="form-input-container">
        <p className="form-error-text">{address.err}</p>

        <input
          type="text"
          className="form--input"
          placeholder="Address"
          style={{ borderColor: "" }}
          value={address.val}
          onChange={(e) => dispatch(setAddress(e.currentTarget.value))}
        />
      </div>
      <div className="form-input-container">
        <p className="form-error-text">{phone.err}</p>
        <input
          type="text"
          className="form--input"
          placeholder="Phone"
          value={phone.val}
          onChange={(e) => dispatch(setPhone(e.currentTarget.value))}
        />
      </div>

      <div className="form--step-btn-container">
        <button
          type="button"
          className="form--step-btn"
          onClick={() => setStage(FormStage.Email)}
        >
          Previous
        </button>
        <button
          type="button"
          className="form--step-btn"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default PersonalForm;

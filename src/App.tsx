import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FormStage } from "./common/enums";
import EmailForm from "./components/Emailform";
import PasswordConf from "./components/PasswordConf";
import PasswordForm from "./components/PasswordForm";
import PersonalForm from "./components/PersonalForm";
import { RootState } from "./store/store";

function App() {
  const [show, setShow] = useState(false)
  const [stage, setStage] = useState<FormStage>(FormStage.Email);

  const { passwordConf } = useSelector(
    (state: RootState) => state.loginDetails
  );

  const currentForm = (stage: FormStage) => {
    switch (stage) {
      case FormStage.Email:
        return <EmailForm setStage={setStage} />;
      case FormStage.Personal:
        return <PersonalForm setStage={setStage} />;
      case FormStage.Password:
        return <PasswordForm setStage={setStage} />;
      case FormStage.PasswordConf:
        return <PasswordConf setStage={setStage} />;
      default:
        return <></>;
    }
  };

  const currentProgressWidth = (stage: FormStage) => {
    switch (stage) {
      case FormStage.Email:
        return "0%";
      case FormStage.Personal:
        return "33%";
      case FormStage.Password:
        return "66%";
      case FormStage.PasswordConf:
        return "100%";
      default:
        return "0%";
    }
  };

  useEffect(() => {
    setShow(true)
    setTimeout(() => setShow(false), 750)
  }, [stage]);

  const opacity = show ? 0 : 1
  return (
        <div className="container">
          <div className="timeline">
            <div
              className="progress"
              style={{ width: currentProgressWidth(stage) }}
            ></div>
          </div>
          <form className="form" style={{opacity}}>
            {currentForm(stage)}
            <small className="form--login">
              <a href="https://google.com">Already have an account?</a>
            </small>
            {stage === FormStage.PasswordConf && !passwordConf.err && (
              <button type="submit" className="form--step-btn form-btn-submit">
                Sign Up
              </button>
            )}
          </form>
        </div>
      )

}
export default App;

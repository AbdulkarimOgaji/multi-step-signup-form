import { useState } from "react";
import { FormStage } from "./common/enums";
import EmailForm from "./components/Emailform";
import PasswordForm from "./components/PasswordForm";
import PersonalForm from "./components/PersonalForm";




function App() {
  const [stage, setStage] = useState<FormStage>(FormStage.Email)

  const currentForm = (stage: FormStage) => {
    switch(stage) {
      case FormStage.Email:
        return <EmailForm setStage={setStage} />
      case FormStage.Personal:
        return <PersonalForm setStage={setStage} />
      case FormStage.Password:
        return <PasswordForm setStage={setStage} />
      default:
        return <></>
    }
  }

  return (
    <div className="container">
      <div className="timeline"></div>
      <form className="form">
          {currentForm(stage)}
        <small className="form--login"><a href="https://google.com">Already have an account?</a></small>
        {
          stage === FormStage.Password && <button type="submit" className="form--step-btn form-btn-submit">Sign Up</button>
        }
        
      </form>
    </div>
  );
}

export default App;

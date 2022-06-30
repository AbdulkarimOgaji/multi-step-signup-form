import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <div className="welcome">
        <h1>
          Welcome to <span className="special-font">BLOGNADO</span>
        </h1>
        <p>Write Blogs | Read Blogs | Stay in Touch</p>
        <Link to="/signup" className="form--step-btn signup-btn">
          Get Started
        </Link>
      </div>
    </>
  );
};

export default Welcome;

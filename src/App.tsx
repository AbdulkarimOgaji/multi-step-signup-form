import { Route, Routes } from "react-router-dom";
import Preview from "./pages/Preview";
import SignUp from "./pages/Signup";
import Welcome from "./pages/Welcome";

function App() {
  
  return (
    <div className="container">
        <Routes>
          <Route index element={<Welcome />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="preview" element={<Preview />} />
        </Routes>
    </div>
  );
}
export default App;

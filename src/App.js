import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import Homepage from "./components/Homepage";
import FillForm from "./components/FillForm";
import Results from "./components/Results";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/fillForm" exact element={<FillForm />} />
          <Route path="/results" exact element={<Results />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

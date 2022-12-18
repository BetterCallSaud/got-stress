import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./App.css";

import Homepage from "./components/Homepage";
import Dashboard from "./components/Dashboard";
import AddEntry from "./components/AddEntry";
import ShowEntries from "./components/ShowEntries";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Homepage />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/addEntry" exact element={<AddEntry />} />
          <Route path="/showEntries" exact element={<ShowEntries />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

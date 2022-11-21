import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Results() {
  const loc = useLocation();
  const score = loc.state.score;

  let [ stressLevel, setStressLevel ] = useState("");
  let [ stressBool, setStressBool ] = useState("");

  if (score < 5) {
    setStressBool("You have stress!");
    if (score <= 2) {
        setStressLevel("Hypertension");
        document.getElementById("stress-level").style.color = "red";
    } else {
        setStressLevel("Moderate stress");
        document.getElementById("stress-level").style.color = "fuchsia";
    }
  } else {
    setStressBool("Negligible/no stress.");
    if (score <= 7) {
        setStressLevel("Mild stress");
        document.getElementById("stress-level").style.color = "cornflowerblue";
    } else {
        setStressLevel("Stress-free");
        document.getElementById("stress-level").style.color = "powderblue";
    }
  }

  return (
    <div className="m-5 text-center">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1 className="mt-6 text-5xl text-slate-800 underline">Results</h1>
      <br />
      <br />
      <h1 className="text-2xl">Here are your results:</h1>
      <div className="text-7xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">
        <h1 className="my-6" id="stress-score">
          {score}/8
        </h1>
        <h1 className="my-6" id="stress-boolean">
          {stressBool}
        </h1>
        <h1 className="my-6" id="stress-level">
          {stressLevel}
        </h1>
      </div>
    </div>
  );
}

export default Results;

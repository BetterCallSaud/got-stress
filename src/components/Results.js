import { Link, useLocation } from "react-router-dom";

function Results() {
  const loc = useLocation();
  const score = loc.state.score;
  const isStress = loc.state.isStress;
  const isStressColor = loc.state.isStressColor;
  const stressLevel = loc.state.stressLevel;
  const stressLevelColor = loc.state.stressLevelColor;

  return (
    <div className="m-5 text-center">
      <Link to="/">
        <button>Home</button>
      </Link>
      <h1 className="mt-6 text-5xl text-slate-800 underline">Results</h1>
      <br />
      <br />
      <h1 className="text-2xl">Here are your results:</h1>
      <div className="bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">
        <h1 className="text-7xl my-6" id="stress-score">
          {score}/8
        </h1>
        <h1 style={{ color: isStressColor }} className="text-5xl my-6" id="stress-bool">
          {isStress}
        </h1>
        <h1 style={{ color: stressLevelColor }} className="text-5xl my-6" id="stress-level">
          {stressLevel}
        </h1>
      </div>
    </div>
  );
}

export default Results;

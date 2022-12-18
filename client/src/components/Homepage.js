import { useNavigate } from "react-router-dom";

function Homepage() {
  const navigate = useNavigate();

  function navigateToDashboard() {
    navigate("/dashboard", { replace: true });
  }

  return (
    <div
      className="pt-20 px-20 text-center bg-[url('https://coolbackgrounds.io/images/backgrounds/white/white-triangle-369b8d2d.jpg')] bg-cover"
      style={{ height: "40rem" }}
    >
      <div>
        <h1 className="mx-10 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">
          GotStress.ai
        </h1>
        <br />
        <p className="mx-20 text-2xl">
          A mental health tracker that uses a{" "}
          <b>stress-level determination algorithm</b> for determining stress
          presence and stress level.
        </p>
        <p className="mx-20 text-2xl">
          The user can create, update or delete their stress entries and review
          them at a later point in time.
        </p>
        <button onClick={navigateToDashboard} className="my-16">
          Try it now!
        </button>
      </div>
    </div>
  );
}

export default Homepage;

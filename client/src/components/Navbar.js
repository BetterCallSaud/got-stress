import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <nav
        className="w-full flex justify-around bg-blue-500 text-2xl p-5 text-white font-bold"
        style={{ fontFamily: "Montserrat" }}
      >
        <Link className="hover:underline" to="/">
          Home
        </Link>
        <Link className="hover:underline" to="/dashboard">
          Dashboard
        </Link>
      </nav>
      <br />
    </div>
  );
}

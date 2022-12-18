import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import client from "../sanity/client";

const FormElement = (props) => (
  <div key={"div-" + props.id}>
    <label
      htmlFor="minmax-range"
      className="block mb-2 text-lg font-medium tracking-wide text-gray-900 dark:text-white"
    >
      {props.factor}
    </label>
    <div className="flex flex-row justify-between items-center">
      <span>1</span>
      <input
        id={props.id}
        type="range"
        min="1"
        max="10"
        step="1"
        defaultValue="5"
        className="large-range w-full h-2 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        name={props.name}
        required
      />
      <span>10</span>
    </div>
    <br />
  </div>
);

const FormElementArray = [];
const factors = [
  "Feeling of anxiety",
  "Lack of motivation",
  "Lack of focus",
  "Headaches/body pain",
  "Frustration",
  "Confusion",
  "Overthinking",
  "How bad was your day?",
];

for (let i = 0; i < factors.length; i++) {
  FormElementArray.push(
    <FormElement
      name={`factor-${i + 1}`}
      factor={factors[i]}
      id={`minmax-range-${i + 1}`}
      key={`minmax-range-${i + 1}`}
    />
  );
}

export default function AddEntry() {
  const post2Sanity = async() => {
    const doc = {
      _type: "record",
      entryId: Math.random().toString(36).slice(2),
      anxiety: parseInt(document.getElementById("minmax-range-1").value),
      lackOfMotivation: parseInt(document.getElementById("minmax-range-2").value),
      lackOfFocus: parseInt(document.getElementById("minmax-range-3").value),
      bodyPain: parseInt(document.getElementById("minmax-range-4").value),
      frustration: parseInt(document.getElementById("minmax-range-5").value),
      confusion: parseInt(document.getElementById("minmax-range-6").value),
      overthinking: parseInt(document.getElementById("minmax-range-7").value),
      badDayFactor: parseInt(document.getElementById("minmax-range-8").value),
      remarks: document.getElementById("remarks").value,
    };
    try {
      await client.create(doc).then((res) => {
        console.log("Entry was created with id: " + res._id);
        document.getElementById("addentry-div").style.display = "none";
        document.getElementById("entry-added").style.display = "block";
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Navbar />
      <div id="entry-added" style={{ display: "none" }}>
        <h1 className="text-2xl font-bold text-center">Entry added.</h1>
        <p className="text-center text-xl">
          You can go back to the{" "}
          <Link className="underline text-blue-600" to="/dashboard">
            Dashboard
          </Link>{" "}
          now!
        </p>
      </div>
      <div
        id="addentry-div"
        className="flex flex-col items-center mx-10 my-10 text-center"
      >
        <h1 className="text-5xl text-slate-900 underline">Add Entry</h1>
        <br />
        <p>
          Please drag the slider from left to right (extreme left suggesting
          good feelings and extreme right being bad feelings)
        </p>
        <br />
        <div
          className=" bg-slate-900 text-white p-5 w-2/3 rounded-lg flex flex-col justify-left"
        >
          {FormElementArray}
          <br />
          <h1 className="text-2xl">Tell us about your day.</h1>
          <textarea
            className="bg-slate-700 my-6"
            placeholder="Enter remarks here"
            name="remarks"
            id="remarks"
          ></textarea>
          <button onClick={post2Sanity} className="text-white" type="submit">
            Submit details
          </button>
        </div>
      </div>
    </>
  );
}

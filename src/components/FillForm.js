import { useNavigate } from "react-router-dom";

const FormElement = (props) => (
  <div>
    <label
      for="minmax-range"
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
        className="large-range w-full h-2 bg-fuchsia-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
      />
      <span>10</span>
    </div>
    <br />
  </div>
);

const FormElementArray = [];
const factors = [
  "Mood",
  "Lack of motivation",
  "Work ease",
  "Social life",
  "No body pain and/or digestive problems",
  "Current financial situation",
  "Untroubled",
  "Calm and peace",
];

for (let i = 0; i < factors.length; i++) {
  FormElementArray.push(<FormElement factor={factors[i]} id={`minmax-range-${i+1}`} />);
}

function FillForm() {

    const navigate = useNavigate();

    function handleSubmit() {
        let totalValue = 0;
        for (let i = 0; i < factors.length; i++) {
            const element = document.getElementById(`minmax-range-${i+1}`);
            totalValue += parseInt(element.value);
            navigate("/results", {replace: true, state: { score: totalValue/factors.length }});
        }
    }

    return (
        <div className="flex flex-col items-center mx-10 my-20 text-center">
        <h1 className="text-5xl text-slate-900 underline">Fill out this form</h1>
        <br />
        <p>
            Please drag the slider from left to right (extreme left being extremely
            bad and extreme right being extremely good)
        </p>
        <br />
        <form
            className=" bg-slate-900 p-5 w-2/3 rounded-lg flex flex-col justify-left"
        >
            {FormElementArray}
            <button onClick={handleSubmit} className="text-white" type="submit">
            Submit
            </button>
        </form>
        </div>
    );
}

export default FillForm;

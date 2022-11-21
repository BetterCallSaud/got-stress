import { useNavigate } from "react-router-dom";

function Homepage() {

    const navigate = useNavigate()

    function navigateToFillForm() {
        navigate("/fillForm", { replace: true });
    }

    return (
        <div className="mt-20 mx-20 text-center">
            <div>
                <h1 className="mx-10 text-8xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-pink-500">GotStress.ai</h1>
                <br/>
                <p className="mx-20 text-2xl">A mental health tracker that uses a <b>stress-level determination algorithm</b> and <b>natural language processing</b> for determing if you have stress or not.</p>
                <button onClick={navigateToFillForm} className="my-16">Try it now!</button>
            </div>
        </div>
    )
}

export default Homepage;
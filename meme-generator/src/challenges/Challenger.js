import react from "react"

export default function Challenger() {
    function handleClick() {
        console.log("I was clicked!")
    };
    function MouseOver() {
        console.log("The mouse passed through me!")
    };

    return (
        <div className="container">
            <img onMouseOver={MouseOver} src="https://picsum.photos/640/360" />
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}




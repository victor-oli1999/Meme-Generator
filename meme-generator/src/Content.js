import react from "react"

export default function Content() {
    const frame = "das";
    return (
        <main className="content">
            <form className="display_form">
                <div className="firstLine">
                    <input type="text" id="top" value="top of the image" />
                    <input type="text" id="bottom" value="bottom of the image" />
                </div>
                <div className="submit">
                    <input type="submit" id="submit" value="Get a new meme image" className="white"/>
                </div>
                <div className="meme">
                    <img src="./imgs/memeimg.png" />
                </div>
            </form>
        </main>
    )
}
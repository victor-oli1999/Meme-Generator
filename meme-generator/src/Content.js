import react from "react"

export default function Content() {
    return (
        <main className="content">
            <form className="display_form">
                <div className="firstLine">
                    <input type="text" id="top" placeholder="Top text" />
                    <input type="text" id="bottom" placeholder="Bottom text" />
                </div>
                <div className="submit">
                    <button className="button white" >Get a new meme image</button>
                </div>
                <div className="meme">
                    <img src="./imgs/memeimg.png" />
                </div>
            </form>
        </main>
    )
}
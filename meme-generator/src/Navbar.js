import react from "react"

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="left">
                <img src="./imgs/trollFace.png" className="troll_Face" />
                <h1 className="white">Meme Generator</h1>
            </div>
            <div className="right">
                <h2 className="white">React Course - Project 5</h2>
            </div>
        </nav>
    )
}
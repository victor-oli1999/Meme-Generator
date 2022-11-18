import React from "react"
import memesData from "./memesData"

export default function Content() {
    let [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: ""
    });

    let [allMemesImages, setAllMemesImages] = React.useState(memesData);

    function getNewMeme() {
        // Acessa o arquivo com os dados dos memes.
        const memesArrays = allMemesImages.data.memes
        // Escolhe aleatoriamente o número que irá acessar no array.
        const randomNumber = Math.floor(Math.random() * memesArrays.length)
        // Pega a imagem e mostra ela.
        let url = memesArrays[randomNumber].url;
        setMeme(prevMeme => ({
            ...prevMeme, 
            randomImage: url}))
    }
    
    return (
        <main className="content">
            <div className="display_form">
                <div className="firstLine">
                    <input type="text" id="top" placeholder="Top text" />
                    <input type="text" id="bottom" placeholder="Bottom text" />
                </div>
                <div className="submit">
                    <button className="button white" onClick={getNewMeme} >Get a new meme image</button>
                </div>
                <div className="meme">
                    <img src={meme.randomImage} />
                </div>
            </div>
        </main>
    )
}
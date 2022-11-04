import react from "react"
import ReactDOM from "react-dom"
import styles from "./styles.css"
import Navbar from "./Navbar"
import Content from "./Content"

function Index() {
    return (
        <div>
            <Navbar />
            <Content />
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))
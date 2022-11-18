import react from "react"
import ReactDOM from "react-dom"
import styles from "./styles.css"
import Navbar from "./Navbar"
import Content from "./Content"
/*import Challenger from "./challenges/Challenger"*/

function Index() {
    return (
        <div>
            <Navbar />
            <Content />
            {/**/}
        </div>
    )
}

ReactDOM.render(<Index />, document.getElementById("root"))
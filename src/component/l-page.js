import React from "react"
import './l-page.css';
const Landing = () => {
    return (<>
        <form>
            <ul>
                <label for="username">Username:</label>
                <input type="text" id="username" required />
                <label for="password">Password:</label>
                <input type="password" id="password" required />
            </ul>
            <button>Login</button>
        </form>
    </>
    )
}
export default Landing;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateUsername, validatePassword } from "../utils/validation";


export default function SignIn() {
    const navigate = useNavigate();


    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const [errors, setErrors] = useState({ username: "", password: "" });


    function handleSubmit(e) {
        e.preventDefault();


        const userError = validateUsername(username);
        const passError = validatePassword(password);


        setErrors({ username: userError, password: passError });


        if (!userError && !passError) {
            navigate("/success");
        }
    }


    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
            <h2>Sign In</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "15px" }}>
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        style={{ width: "100%", padding: "10px" }}
                    />
                    {errors.username && <p style={{ color: "red", fontSize: "12px" }}>{errors.username}</p>}
                </div>


                <div style={{ marginBottom: "15px" }}>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={{ width: "100%", padding: "10px" }}
                    />
                    {errors.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>}
                </div>


                <button style={{ padding: "10px 20px", width: "100%" }}>Login</button>
            </form>
        </div>
    );
}
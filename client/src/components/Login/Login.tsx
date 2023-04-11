import "./Login.css";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Login() {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");

    function onSubmit(event: { preventDefault: () => void; }) {
        event.preventDefault();
        try {
            //authentication
            alert("Logged in");
        } catch (e: unknown) {
            if (e instanceof Error) {
                alert(e.message); 
            }
        }
    }
    function checkForm() {
        return id.length > 0 && password.length > 0;
    }
    return (
        <div className="Login">
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="id">
                    <Form.Label>ID</Form.Label>
                    <Form.Control
                        autoFocus
                        type="id"
                        value={id}
                        onChange={(e) => setId(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>PASSWORD</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button size="lg" type="submit" disabled={!checkForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}

export default Login
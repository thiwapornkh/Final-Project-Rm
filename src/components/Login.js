import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../css/Login.css";

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <> 
     <Card>
        <Card.Body className="login-div">
        <img
        className="microprocessor-2-icon1"
        alt=""
        src="microprocessor-2@2x.png"
      />
      <img
        className="microprocessor-1-icon1"
        alt=""
        src="microprocessor-1@2x.png"
      />
          <div className="rectangle-div14" />
              <div className="sign-in-div">Log In</div>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group className="email-div1 w-75" id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required placeholder="example@gmail.com"/>
                </Form.Group>
                <Form.Group className="password-div1 w-75" id="password">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button className="save-div1" disabled={loading} type="submit">
                  Log In
                </Button>

                <div className="forget-password">
                <Link to="/forgot-password">Forgot Password?</Link>
              </div>

              <div className="haveaccount1">
            Need an account? <Link to="/signup">Sign Up</Link>
              </div>
 
              </Form>
              
        </Card.Body>
      </Card>
      

    </>
  )
}

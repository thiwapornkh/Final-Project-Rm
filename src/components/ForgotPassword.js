import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link } from "react-router-dom"
import "../css/forgetPass.css";

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("Check your inbox for further instructions")
    } catch {
      setError("Failed to reset password")
    }

    setLoading(false)
  }

  return (
    <>
      <Card>
        <Card.Body className="forgotpass-div"> 
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

          <h2 className="forget-in-div text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          {message && <Alert variant="success">{message}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" >
              <Form.Label className="forget-email-div1" >Email</Form.Label>
              <Form.Control  className=" email-div2 w-75" type="email" ref={emailRef} required 
              placeholder="example@gmail.com"/>
            </Form.Group>
            <Button disabled={loading} className="resetbutton w-50" type="submit">
              Reset Password
            </Button>
          </Form>
          <div className="haveaccount2 w-100 text-center mt-3">
            <Link to="/login">Login</Link>
          </div>

          <div className="needaccount2 w-100 text-center mt-2">
        Need an account? <Link to="/signup">Sign Up</Link>
      </div>
      
        </Card.Body>
      </Card>
      
    </>
  )
}

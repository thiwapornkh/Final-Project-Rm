import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../css/Registation.css";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { signup } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    try {
      setError("")
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to create an account")
    }

    setLoading(false)
  }

  return (
    <>
      <Card >
        <Card.Body className="registation-div">
        {/* {/* <div className="registation-div">  </div> */}
 
      <img className="microprocessor-2-icon"
        alt=""
        src="microprocessor-2@2x.png"/>
      <img
        className="microprocessor-1-icon"
        alt=""
        src="microprocessor-1@2x.png"
      />
      <div className="rectangle-div12" />
          <div className="sign-up-div">Sign up</div>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="email-div w-75" id="email">
              <Form.Label >Email</Form.Label>
              <Form.Control  type="email" ref={emailRef} required placeholder="example@gmail.com"
              />
            </Form.Group>
            <Form.Group className="password-div w-75" id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Form.Group className="re-password-div w-75" id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" ref={passwordConfirmRef} required />
            </Form.Group>
            
            <Button disabled={loading} className="save-div" type="submit">
              Sign Up
            </Button>
            
          </Form>
          <div className="haveaccount">
        Already have an account? <Link to="/login">Log In</Link>
      </div>
        </Card.Body>
      </Card>
      
    </>
  )
}

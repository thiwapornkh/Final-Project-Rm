import React, { useRef, useState } from "react"
import { Form, Button, Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../css/updateProfile.css";

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail, logout } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }


  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div className="updateprofile-div">
        <Card.Body >
          <h2 className="update-profile-text">Update Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email" className="email-update w-75">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                ref={emailRef}
                required
                defaultValue={currentUser.email}
              />
            </Form.Group>
            <Form.Group id="password" className="password-update w-75">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Form.Group id="password-confirm" className="passconfirm-update w-75">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Leave blank to keep the same"
              />
            </Form.Group>
            <Button disabled={loading} className="btn-update w-45" type="submit">
              Update
            </Button>

            <div className="btn-cancel w-100">
              <Link to="/">Cancel</Link>
            </div>
          </Form>
          <div className="rectangle-div20-update" />
          <img className="ellipse-icon1-update" alt="" src="ellipse-3.svg" />
          <img className="ellipse-icon2-update" alt="" src="ellipse-6.svg" />
          <img className="ellipse-icon3-update" alt="" src="ellipse-3.svg" />
          <Link to="/">
          <img className="ellipse-icon4-update" alt="" src="ellipse-4@2x.png" />
          </Link>

          <Link to="/update-profile">
               <img className="ellipse-icon5-update" alt="" src="ellipse-5@2x.png" />
          </Link>
     
          <Link>
               <img className="logout-icon-update" alt="" src="logout.png" onClick={handleLogout}/>
               
           </Link>  
        </Card.Body>
      </div>
      
    </>
  )
}

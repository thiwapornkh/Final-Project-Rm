import React, { useState } from "react"
import { Card, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import "../css/Profile.css";

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

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
    <div className="profile-div" >
      {/* <Card background-color="#d9abfe" > */}
        <Card.Body >
           <div className="rectangle-div17" />
          {/* <h2 className="your-profile-div">Profile</h2> */}
          {error && <Alert variant="danger">{error}</Alert>}
          <div className="email-profile">Email: </div>
          <div className="email-currentUser"> {currentUser.email} </div>
          
          
          <img className="line-icon1" alt="" src="line-2.svg" />
          <div className="sex-div ">sex</div>
          <img className="line-icon" alt="" src="line-2.svg" />
          <div className="age-div ">age</div>
          
          {/* <Link to="/update-profile" className="btn btn-primary group-div4">
            Update Profile
          </Link> */}
          <div className="username-div">username</div>
          <Link to="/update-user">
          <img className="ellipse-icon" alt="" src="ellipse-2@2x.png" />
          </Link>
          <img className="line-icon4" alt="" src="line-2.svg" />
          <div className="your-profile-div">Your Profile</div>
          <div className="rectangle-div20" />
          <img className="ellipse-icon1" alt="" src="ellipse-3.svg" />
          <img className="ellipse-icon2" alt="" src="ellipse-6.svg" />
          <img className="ellipse-icon3" alt="" src="ellipse-3.svg" />
          <Link to="/">
          <img className="ellipse-icon4" alt="" src="ellipse-4@2x.png" />
          </Link>

          <Link to="/update-profile">
               <img className="ellipse-icon5" alt="" src="ellipse-5@2x.png" />
          </Link>
     
          <Link>
               <img className="logout-icon" alt="" src="logout.png" onClick={handleLogout}/>
               {/* <Button variant="link" onClick={handleLogout}>Log Out</Button> */}
          </Link>
          
          {/* <div className="group-div5 " >
              <Button variant="link" onClick={handleLogout}>Log Out</Button>
          </div> */}
        </Card.Body>

      </div>
     
    </>
  )
}

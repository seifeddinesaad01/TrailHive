import React from 'react'

const Footer = () => {
  return (
   <div className="footer">
    <h1>TrailHive</h1>
    <ul>
        <li>App</li>
        <li>Feature</li>
        <li>Benefits</li>
        <li>Pricing</li>
        <li>Explore</li>
        <li>trails</li>
    </ul>
    <ul>
        <li>Company</li>
        <li>About</li>
        <li>Jobs</li>
        <li>Press</li>
        <li>Support</li>
        <li>Members</li>
    </ul>
    <div className="submit__email">
      <div className="input__field">
        <input type="text"  placeholder='enter your email'/>
        <p>By subscribing you agree to with our Privacy Policy</p>
      </div>
        <button className="submit__btn">
          Submit
        </button>
    </div>
   </div>
  )
}

export default Footer